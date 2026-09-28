import { SHAPES, type ShapeDefinition } from './shapes';
import { fromCubicMeters, formatNumber } from './units';

export class SingleToolCalculatorApp {
  private shapeId: string;
  private shape: ShapeDefinition;
  private currentInputs: Record<string, { val: number; unit: string }> = {};
  private activeUnit = 'gal';
  private lastValidText = '';
  private isSpanish = false;
  private isGerman = false;
  private isFrench = false;
  private shapeDisplayName = '';

  constructor(cardEl: HTMLElement) {
    this.shapeId = cardEl.getAttribute('data-shape-id') || 'cube';
    this.shape = SHAPES[this.shapeId] || SHAPES.cube;
    const defaultUnitAttr = cardEl.getAttribute('data-default-unit');
    if (defaultUnitAttr) {
      this.activeUnit = defaultUnitAttr;
    }
    const lang = cardEl.getAttribute('data-lang') || 'en';
    this.isSpanish = lang === 'es';
    this.isGerman = lang === 'de';
    this.isFrench = lang === 'fr';
    this.shapeDisplayName = cardEl.getAttribute('data-shape-name') || this.shape.name;
    this.init();
  }

  private init(): void {
    this.initInputs();
    this.restoreFromUrl();
    this.setupListeners();
    this.recalculate();
  }

  private translateErrorMessage(msg: string): string {
    if (this.isFrench) {
      if (msg.includes('inner radius must be smaller')) {
        return 'Le rayon intérieur doit être inférieur au rayon extérieur.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'Le rayon mineur ne peut pas dépasser le rayon majeur.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'La hauteur de remplissage doit être comprise entre 0 et le diamètre total de la cuve.';
      }
      if (msg.includes('finite result')) {
        return 'Le calcul n\'a pas produit de résultat fini. Vérifiez les mesures.';
      }
      return 'Le calcul n\'a pas pu être effectué. Vérifiez les mesures.';
    }

    if (this.isGerman) {
      if (msg.includes('inner radius must be smaller')) {
        return 'Der Innenradius muss kleiner als der Außenradius sein.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'Der Rohrradius darf den Hauptradius nicht überschreiten.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'Der Flüssigkeitsstand muss zwischen 0 und dem Gesamtdurchmesser des Tanks liegen.';
      }
      if (msg.includes('finite result')) {
        return 'Die Berechnung ergab kein gültiges Ergebnis. Bitte überprüfe die Maße.';
      }
      return 'Die Berechnung konnte nicht abgeschlossen werden. Bitte überprüfe die Maße.';
    }

    if (!this.isSpanish) return msg;
    if (msg.includes('inner radius must be smaller')) {
      return 'El radio interior debe ser menor que el radio exterior.';
    }
    if (msg.includes('minor radius cannot exceed')) {
      return 'El radio menor no puede superar el radio mayor.';
    }
    if (msg.includes('liquid fill depth must be between')) {
      return 'La profundidad del líquido debe estar entre 0 y el diámetro total del tanque.';
    }
    if (msg.includes('finite result')) {
      return 'El cálculo no produjo un resultado válido. Revisa las medidas e inténtalo de nuevo.';
    }
    return 'El cálculo no pudo completarse. Revisa las medidas e inténtalo de nuevo.';
  }

  private restoreFromUrl(): void {
    const params = new URLSearchParams(window.location.search);
    const outputUnit = params.get('unit');
    const outUnitSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
    if (outputUnit && outUnitSelect?.querySelector(`option[value="${CSS.escape(outputUnit)}"]`)) {
      this.activeUnit = outputUnit;
      outUnitSelect.value = outputUnit;
    }

    for (const input of this.shape.inputs) {
      const value = params.get(input.id);
      const unit = params.get(`${input.id}Unit`);
      const numInput = document.getElementById(`tool-in-${input.id}`) as HTMLInputElement | null;
      const unitSelect = document.getElementById(`tool-unit-${input.id}`) as HTMLSelectElement | null;
      if (value !== null && Number.isFinite(Number(value))) {
        this.currentInputs[input.id].val = Number(value);
        if (numInput) numInput.value = value;
      }
      if (unit && unitSelect?.querySelector(`option[value="${CSS.escape(unit)}"]`)) {
        this.currentInputs[input.id].unit = unit;
        unitSelect.value = unit;
      }
    }
  }

  private updateUrl(): void {
    const params = new URLSearchParams();
    for (const input of this.shape.inputs) {
      const current = this.currentInputs[input.id];
      if (Number.isFinite(current.val)) params.set(input.id, String(current.val));
      params.set(`${input.id}Unit`, current.unit);
    }
    params.set('unit', this.activeUnit);
    const query = params.toString();
    history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
  }

  private clearValidation(): void {
    const errorEl = document.getElementById('single-calculation-error');
    errorEl?.classList.add('hidden');
    if (errorEl) errorEl.textContent = '';
    for (const input of this.shape.inputs) {
      const element = document.getElementById(`tool-in-${input.id}`);
      element?.removeAttribute('aria-invalid');
      element?.removeAttribute('aria-describedby');
    }
  }

  private showError(message: string, fieldIds: string[] = []): void {
    const errorEl = document.getElementById('single-calculation-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    for (const fieldId of fieldIds) {
      const element = document.getElementById(`tool-in-${fieldId}`);
      element?.setAttribute('aria-invalid', 'true');
      element?.setAttribute('aria-describedby', 'single-calculation-error');
    }
  }

  private initInputs(): void {
    // Initialize all inputs as blank (NaN) with default unit
    for (const input of this.shape.inputs) {
      const defaultUnit = (this.isSpanish || this.isFrench || this.isGerman) && (input.defaultUnit === 'in' || input.defaultUnit === 'ft') ? 'cm' : input.defaultUnit;
      this.currentInputs[input.id] = { val: NaN, unit: defaultUnit };
    }
  }

  private setupListeners(): void {
    // Listen to numeric input changes
    this.shape.inputs.forEach((input) => {
      const numInput = document.getElementById(`tool-in-${input.id}`) as HTMLInputElement | null;
      const unitSelect = document.getElementById(`tool-unit-${input.id}`) as HTMLSelectElement | null;

      if (numInput) {
        numInput.addEventListener('input', (e) => {
          const raw = (e.target as HTMLInputElement).value.trim();
          const val = raw === '' ? NaN : parseFloat(raw);
          this.currentInputs[input.id].val = val;
          this.updateUrl();
          this.recalculate();
        });
      }

      if (unitSelect) {
        unitSelect.addEventListener('change', (e) => {
          this.currentInputs[input.id].unit = (e.target as HTMLSelectElement).value;
          this.updateUrl();
          this.recalculate();
        });
      }
    });

    // Output unit dropdown listener
    const outUnitSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
    if (outUnitSelect) {
      outUnitSelect.addEventListener('change', (e) => {
        this.activeUnit = (e.target as HTMLSelectElement).value;
        this.updateUrl();
        this.recalculate();
      });
    }

    // Clear / Reset button listener
    const clearBtn = document.getElementById('single-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        for (const input of this.shape.inputs) {
          this.currentInputs[input.id].val = NaN;
          const numInput = document.getElementById(`tool-in-${input.id}`) as HTMLInputElement | null;
          if (numInput) numInput.value = '';
        }
        history.replaceState(null, '', window.location.pathname);
        this.recalculate();
      });
    }

    // Copy button listener
    const copyBtn = document.getElementById('single-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        if (!this.lastValidText) return;
        const val = document.getElementById('single-volume-value')?.textContent || '0.00';
        const outSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
        const unitName = outSelect?.options[outSelect.selectedIndex]?.text || this.activeUnit;
        let labelPrefix = `${this.shape.name} Volume`;
        if (this.isSpanish) {
          labelPrefix = `Volumen de ${this.shapeDisplayName}`;
        } else if (this.isGerman) {
          labelPrefix = `Volumen: ${this.shapeDisplayName}`;
        } else if (this.isFrench) {
          labelPrefix = `Volume: ${this.shapeDisplayName}`;
        }
        const text = `${labelPrefix}: ${val} ${unitName}`;
        try {
          await navigator.clipboard.writeText(text);
          const original = copyBtn.textContent;
          copyBtn.textContent = this.isSpanish ? '¡Copiado!' : (this.isGerman ? 'Kopiert!' : (this.isFrench ? 'Copié !' : 'Copied!'));
          setTimeout(() => {
            copyBtn.textContent = original;
          }, 1500);
        } catch {
          // Fallback
        }
      });
    }
  }

  private recalculate(): void {
    const valEl = document.getElementById('single-volume-value');
    const stepsCard = document.getElementById('single-steps-card');
    const stepsContainer = document.getElementById('single-steps-container');
    const surfaceAreaEl = document.getElementById('single-surface-area');

    if (!valEl) return;

    this.clearValidation();

    // Fill depth may be zero for an empty horizontal tank; all other dimensions must be positive.
    const allFilled = this.shape.inputs.every((input) => {
      const v = this.currentInputs[input.id]?.val;
      return Number.isFinite(v) && (this.shapeId === 'horizontal_tank_fill' && input.id === 'fillDepth' ? v >= 0 : v > 0);
    });

    if (!allFilled) {
      valEl.textContent = '0.00';
      if (surfaceAreaEl) surfaceAreaEl.textContent = '—';
      if (stepsCard) stepsCard.classList.add('hidden');
      this.lastValidText = '';
      return;
    }

    try {
      const result = this.shape.calculate(this.currentInputs);

      if (result.error) {
        valEl.textContent = '—';
        if (surfaceAreaEl) surfaceAreaEl.textContent = '—';
        if (stepsCard) stepsCard.classList.add('hidden');
        this.lastValidText = '';
        this.showError(this.translateErrorMessage(result.error.message), result.error.fieldIds);
        return;
      }

      if (result.volumeM3 < 0 || !Number.isFinite(result.volumeM3)) {
        valEl.textContent = '—';
        if (surfaceAreaEl) surfaceAreaEl.textContent = '—';
        if (stepsCard) stepsCard.classList.add('hidden');
        this.lastValidText = '';
        this.showError(this.translateErrorMessage('The calculation could not produce a finite result. Check the measurements and try again.'));
        return;
      }

      // Convert to chosen output unit
      const converted = fromCubicMeters(result.volumeM3, this.activeUnit);
      valEl.textContent = formatNumber(converted, 3);
      this.lastValidText = valEl.textContent;

      // Surface area if available
      if (surfaceAreaEl) {
        if (result.surfaceAreaM2 && result.surfaceAreaM2 > 0) {
          surfaceAreaEl.textContent = `${formatNumber(result.surfaceAreaM2, 2)} m²`;
        } else {
          surfaceAreaEl.textContent = '—';
        }
      }

      // Render step-by-step arithmetic substitution
      if (stepsCard && stepsContainer && result.steps && result.steps.length > 0) {
        stepsCard.classList.remove('hidden');
        stepsContainer.innerHTML = result.steps
          .map(
            (step, idx) => `
          <div class="p-3 rounded-lg bg-white border border-hairline flex flex-col gap-1 text-xs">
            <div class="flex items-center gap-2 text-ink-muted font-medium">
              <span class="w-5 h-5 rounded-full bg-canvas-soft border border-hairline flex items-center justify-center font-mono font-bold text-[10px] text-ink">
                ${idx + 1}
              </span>
              <span>${step.label}</span>
            </div>
            <div class="font-mono text-xs sm:text-sm font-bold text-ink pl-7 overflow-x-auto py-0.5">
              ${step.equation}
            </div>
          </div>
        `
          )
          .join('');
      }
    } catch {
      valEl.textContent = '—';
      if (stepsCard) stepsCard.classList.add('hidden');
      this.lastValidText = '';
      this.showError(this.translateErrorMessage('The calculation could not be completed. Check the measurements and try again.'));
    }
  }
}

// Auto-init on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const cardEl = document.getElementById('single-tool-card');
    if (cardEl) {
      new SingleToolCalculatorApp(cardEl);
    }
  });
}
