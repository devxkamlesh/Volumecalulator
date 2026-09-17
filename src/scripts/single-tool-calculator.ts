import { SHAPES, type ShapeDefinition } from './shapes';
import { fromCubicMeters, formatNumber } from './units';

export class SingleToolCalculatorApp {
  private shapeId: string;
  private shape: ShapeDefinition;
  private currentInputs: Record<string, { val: number; unit: string }> = {};
  private activeUnit = 'gal';

  constructor(cardEl: HTMLElement) {
    this.shapeId = cardEl.getAttribute('data-shape-id') || 'cube';
    this.shape = SHAPES[this.shapeId] || SHAPES.cube;
    this.init();
  }

  private init(): void {
    this.initInputs();
    this.setupListeners();
    this.recalculate();
  }

  private initInputs(): void {
    // Initialize all inputs as blank (NaN) with default unit
    for (const input of this.shape.inputs) {
      this.currentInputs[input.id] = { val: NaN, unit: input.defaultUnit };
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
          this.recalculate();
        });
      }

      if (unitSelect) {
        unitSelect.addEventListener('change', (e) => {
          this.currentInputs[input.id].unit = (e.target as HTMLSelectElement).value;
          this.recalculate();
        });
      }
    });

    // Output unit dropdown listener
    const outUnitSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
    if (outUnitSelect) {
      outUnitSelect.addEventListener('change', (e) => {
        this.activeUnit = (e.target as HTMLSelectElement).value;
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
        this.recalculate();
      });
    }

    // Copy button listener
    const copyBtn = document.getElementById('single-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const val = document.getElementById('single-volume-value')?.textContent || '0.00';
        const outSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
        const unitName = outSelect?.options[outSelect.selectedIndex]?.text || this.activeUnit;
        const text = `${this.shape.name} Volume: ${val} ${unitName}`;
        try {
          await navigator.clipboard.writeText(text);
          const original = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
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

    // Check if all inputs are provided and > 0
    const allFilled = this.shape.inputs.every((input) => {
      const v = this.currentInputs[input.id]?.val;
      return !isNaN(v) && v > 0;
    });

    if (!allFilled) {
      valEl.textContent = '0.00';
      if (surfaceAreaEl) surfaceAreaEl.textContent = '—';
      if (stepsCard) stepsCard.classList.add('hidden');
      return;
    }

    try {
      const result = this.shape.calculate(this.currentInputs);

      if (result.volumeM3 <= 0 || isNaN(result.volumeM3)) {
        valEl.textContent = '0.00';
        if (surfaceAreaEl) surfaceAreaEl.textContent = '—';
        if (stepsCard) stepsCard.classList.add('hidden');
        return;
      }

      // Convert to chosen output unit
      const converted = fromCubicMeters(result.volumeM3, this.activeUnit);
      valEl.textContent = formatNumber(converted, 3);

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
      valEl.textContent = '0.00';
      if (stepsCard) stepsCard.classList.add('hidden');
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
