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
  private isPortuguese = false;
  private isItalian = false;
  private isRussian = false;
  private isJapanese = false;
  private isChinese = false;
  private isArabic = false;
  private isHindi = false;
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
    this.isPortuguese = lang === 'pt';
    this.isItalian = lang === 'it';
    this.isRussian = lang === 'ru';
    this.isJapanese = lang === 'ja';
    this.isChinese = lang === 'zh';
    this.isArabic = lang === 'ar';
    this.isHindi = lang === 'hi';
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

    if (this.isPortuguese) {
      if (msg.includes('inner radius must be smaller')) {
        return 'O raio interno deve ser menor que o raio externo.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'O raio menor da seção não pode ultrapassar o raio maior.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'A altura do líquido deve estar entre 0 e o diâmetro total do tanque.';
      }
      if (msg.includes('finite result')) {
        return 'O cálculo não produziu um resultado finito. Verifique as medidas e tente novamente.';
      }
      return 'O cálculo não pôde ser concluído. Verifique as medidas e tente novamente.';
    }

    if (this.isItalian) {
      if (msg.includes('inner radius must be smaller')) {
        return 'Il raggio interno deve essere inferiore al raggio esterno.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'Il raggio minore della sezione non può superare il raggio maggiore.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'Il livello del liquido deve essere compreso tra 0 e il diametro totale del serbatoio.';
      }
      if (msg.includes('finite result')) {
        return 'Il calcolo non ha prodotto un risultato valido. Verifica le misure e riprova.';
      }
      return 'Il calcolo non è stato completato. Verifica le misure e riprova.';
    }

    if (this.isRussian) {
      if (msg.includes('inner radius must be smaller')) {
        return 'Внутренний радиус должен быть меньше наружного радиуса.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'Радиус сечения трубки не может превышать главный радиус тора.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'Уровень жидкости должен находиться в диапазоне от 0 до полного диаметра резервуара.';
      }
      if (msg.includes('finite result')) {
        return 'Вычисление не дало конечного результата. Проверьте введенные размеры.';
      }
      return 'Не удалось завершить расчет. Проверьте правильность введенных данных.';
    }

    if (this.isJapanese) {
      if (msg.includes('inner radius must be smaller')) {
        return '内半径（内側の半径）は外半径（外側の半径）より小さくする必要があります。';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return '管自体の半径（小半径）は大半径を超えることはできません。';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return '液面の深さは0からタンク全径の間で指定してください。';
      }
      if (msg.includes('finite result')) {
        return '計算結果が有効な数値になりませんでした。測定値を確認してください。';
      }
      return '計算を完了できませんでした。入力値を確認してください。';
    }

    if (this.isChinese) {
      if (msg.includes('inner radius must be smaller')) {
        return '内半径必须小于外半径。';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return '管道截面半径（小半径）不能超过圆环中心主半径。';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return '液位深度必须介于 0 与储罐总直径之间。';
      }
      if (msg.includes('finite result')) {
        return '计算未能产生有效数值。请检查所输入的尺寸。';
      }
      return '计算无法完成，请检查输入的数据。';
    }

    if (this.isArabic) {
      if (msg.includes('inner radius must be smaller')) {
        return 'يجب أن يكون نصف القطر الداخلي أصغر من نصف القطر الخارجي.';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'لا يمكن لنصف قطر المقطع الصغير أن يتجاوز نصف القطر الرئيسي للطارة.';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'يجب أن يكون عمق السائل بين 0 وكامل قطر الخزان.';
      }
      if (msg.includes('finite result')) {
        return 'لم تنتج العملية نتيجة صالحة. يرجى التحقق من الأبعاد المدخلة.';
      }
      return 'تعذر إكمال الحساب. يرجى التحقق من الأبعاد المدخلة.';
    }

    if (this.isHindi) {
      if (msg.includes('inner radius must be smaller')) {
        return 'आंतरिक त्रिज्या बाहरी त्रिज्या से छोटी होनी चाहिए।';
      }
      if (msg.includes('minor radius cannot exceed')) {
        return 'ट्यूब त्रिज्या (r) मुख्य केंद्र त्रिज्या (R) से अधिक नहीं हो सकती।';
      }
      if (msg.includes('liquid fill depth must be between')) {
        return 'द्रव की गहराई 0 और टैंक के कुल व्यास के बीच होनी चाहिए।';
      }
      if (msg.includes('finite result')) {
        return 'गणना से वैध संख्या प्राप्त नहीं हुई। कृपया दर्ज किए गए मान जांचें।';
      }
      return 'गणना पूरी नहीं हो सकी। कृपया इनपुट मान जांचें।';
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

  private getNumInputElement(id: string): HTMLInputElement | null {
    return (document.getElementById(`tool-in-${id}`) || document.getElementById(`single-input-${id}`)) as HTMLInputElement | null;
  }

  private getUnitSelectElement(id: string): HTMLSelectElement | null {
    return (document.getElementById(`tool-unit-${id}`) || document.getElementById(`single-unit-${id}`)) as HTMLSelectElement | null;
  }

  private getVolumeValueElement(): HTMLElement | null {
    return document.getElementById('single-volume-value') || document.getElementById('single-result-val');
  }

  private getErrorElement(): HTMLElement | null {
    return document.getElementById('single-calculation-error') || document.getElementById('single-calc-error');
  }

  private getSurfaceAreaElement(): HTMLElement | null {
    return document.getElementById('single-surface-val') || document.getElementById('single-surface-area');
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
      const numInput = this.getNumInputElement(input.id);
      const unitSelect = this.getUnitSelectElement(input.id);
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
    const errorEl = this.getErrorElement();
    errorEl?.classList.add('hidden');
    if (errorEl) errorEl.textContent = '';
    for (const input of this.shape.inputs) {
      const element = this.getNumInputElement(input.id);
      element?.removeAttribute('aria-invalid');
      element?.removeAttribute('aria-describedby');
    }
  }

  private showError(message: string, fieldIds: string[] = []): void {
    const errorEl = this.getErrorElement();
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    for (const fieldId of fieldIds) {
      const element = this.getNumInputElement(fieldId);
      element?.setAttribute('aria-invalid', 'true');
      element?.setAttribute('aria-describedby', errorEl?.id || 'single-calculation-error');
    }
  }

  private initInputs(): void {
    // Initialize all inputs as blank (NaN) with default unit
    for (const input of this.shape.inputs) {
      const defaultUnit = (this.isSpanish || this.isFrench || this.isGerman || this.isPortuguese || this.isItalian || this.isRussian || this.isJapanese || this.isChinese || this.isArabic || this.isHindi) && (input.defaultUnit === 'in' || input.defaultUnit === 'ft') ? 'cm' : input.defaultUnit;
      this.currentInputs[input.id] = { val: NaN, unit: defaultUnit };
    }
  }

  private setupListeners(): void {
    // Listen to numeric input changes
    this.shape.inputs.forEach((input) => {
      const numInput = this.getNumInputElement(input.id);
      const unitSelect = this.getUnitSelectElement(input.id);

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
          const numInput = this.getNumInputElement(input.id);
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
        const val = this.getVolumeValueElement()?.textContent || '0.00';
        const outSelect = document.getElementById('single-output-unit') as HTMLSelectElement | null;
        const unitName = outSelect?.options[outSelect.selectedIndex]?.text || this.activeUnit;
        let labelPrefix = `${this.shape.name} Volume`;
        if (this.isSpanish) {
          labelPrefix = `Volumen de ${this.shapeDisplayName}`;
        } else if (this.isGerman) {
          labelPrefix = `Volumen: ${this.shapeDisplayName}`;
        } else if (this.isFrench) {
          labelPrefix = `Volume: ${this.shapeDisplayName}`;
        } else if (this.isPortuguese) {
          labelPrefix = `Volume: ${this.shapeDisplayName}`;
        } else if (this.isItalian) {
          labelPrefix = `Volume: ${this.shapeDisplayName}`;
        } else if (this.isRussian) {
          labelPrefix = `Объем: ${this.shapeDisplayName}`;
        } else if (this.isJapanese) {
          labelPrefix = `${this.shapeDisplayName}の体積`;
        } else if (this.isChinese) {
          labelPrefix = `${this.shapeDisplayName}体积`;
        } else if (this.isArabic) {
          labelPrefix = `حجم ${this.shapeDisplayName}`;
        } else if (this.isHindi) {
          labelPrefix = `${this.shapeDisplayName} का आयतन`;
        }
        const text = `${labelPrefix}: ${val} ${unitName}`;
        try {
          await navigator.clipboard.writeText(text);
          const original = copyBtn.textContent;
          copyBtn.textContent = this.isSpanish ? '¡Copiado!' : (this.isGerman ? 'Kopiert!' : (this.isFrench ? 'Copié !' : (this.isPortuguese ? 'Copiado!' : (this.isItalian ? 'Copiato!' : (this.isRussian ? 'Скопировано!' : (this.isJapanese ? 'コピー完了！' : (this.isChinese ? '已复制！' : (this.isArabic ? 'تم النسخ!' : (this.isHindi ? 'कॉपी हो गया!' : 'Copied!')))))))));
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
    const valEl = this.getVolumeValueElement();
    const stepsCard = document.getElementById('single-steps-card');
    const stepsContainer = document.getElementById('single-steps-container');
    const surfaceAreaEl = this.getSurfaceAreaElement();

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
