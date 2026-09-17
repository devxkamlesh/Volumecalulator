import { SHAPES, type ShapeDefinition } from './shapes';
import { LENGTH_UNITS, VOLUME_UNITS, fromCubicMeters, formatNumber } from './units';
import { getShapeSvg } from './diagrams';
import { getVolumeEquivalents } from './equivalents';

class VolumeCalculatorApp {
  private activeShape: ShapeDefinition = SHAPES.cube;
  private currentInputs: Record<string, { val: number; unit: string }> = {};
  private currentOutputUnit = 'm3';

  constructor() {
    this.init();
  }

  private init(): void {
    this.parseUrlParams();
    this.setupShapeCardListeners();
    this.setupCategoryListeners();
    this.setupSearchListener();
    this.setupOutputUnitListener();
    this.setupResetListener();
    this.setupCopyAndShareListeners();
    this.renderActiveShape();
  }

  private parseUrlParams(): void {
    const params = new URLSearchParams(window.location.search);
    const shapeParam = params.get('shape');
    if (shapeParam && SHAPES[shapeParam]) {
      this.activeShape = SHAPES[shapeParam];
    }
    const unitParam = params.get('unit');
    if (unitParam && VOLUME_UNITS[unitParam]) {
      this.currentOutputUnit = unitParam;
      const unitSelect = document.getElementById('primary-volume-unit') as HTMLSelectElement | null;
      if (unitSelect) unitSelect.value = unitParam;
    }
  }

  private updateUrlParams(): void {
    const params = new URLSearchParams();
    params.set('shape', this.activeShape.id);
    params.set('unit', this.currentOutputUnit);
    for (const [key, item] of Object.entries(this.currentInputs)) {
      params.set(key, String(item.val));
      params.set(`${key}_unit`, item.unit);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }

  private setupShapeCardListeners(): void {
    const cards = document.querySelectorAll<HTMLButtonElement>('.shape-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const shapeId = card.getAttribute('data-shape-id');
        if (shapeId && SHAPES[shapeId]) {
          this.setActiveShape(SHAPES[shapeId]);
          // Scroll smoothly to calculator
          const calcElement = document.getElementById('calculator');
          if (calcElement) {
            calcElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  private setupCategoryListeners(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.category-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('bg-primary', 'text-white');
          t.classList.add('bg-white', 'text-ink-secondary', 'border', 'border-hairline');
        });
        tab.classList.add('bg-primary', 'text-white');
        tab.classList.remove('bg-white', 'text-ink-secondary', 'border-hairline');

        const category = tab.getAttribute('data-category');
        this.filterCardsByCategory(category || 'all');
      });
    });
  }

  private filterCardsByCategory(category: string): void {
    const cards = document.querySelectorAll<HTMLButtonElement>('.shape-card');
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  private setupSearchListener(): void {
    const searchInput = document.getElementById('shape-search-input') as HTMLInputElement | null;
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = (e.target as HTMLInputElement).value.toLowerCase().trim();
      const cards = document.querySelectorAll<HTMLButtonElement>('.shape-card');
      cards.forEach((card) => {
        const name = card.getAttribute('data-name') || '';
        const shapeId = card.getAttribute('data-shape-id') || '';
        if (name.includes(query) || shapeId.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  private setupOutputUnitListener(): void {
    const select = document.getElementById('primary-volume-unit') as HTMLSelectElement | null;
    if (!select) return;

    select.addEventListener('change', (e) => {
      this.currentOutputUnit = (e.target as HTMLSelectElement).value;
      this.recalculate();
      this.updateUrlParams();
    });
  }

  private setupResetListener(): void {
    const resetBtn = document.getElementById('reset-inputs-btn');
    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
      this.resetInputsToDefaults();
    });
  }

  private resetInputsToDefaults(): void {
    this.currentInputs = {};
    for (const input of this.activeShape.inputs) {
      this.currentInputs[input.id] = {
        val: input.defaultVal,
        unit: input.defaultUnit,
      };
    }
    this.renderInputsForm();
    this.recalculate();
    this.updateUrlParams();
  }

  private setActiveShape(shape: ShapeDefinition): void {
    this.activeShape = shape;
    this.currentInputs = {};

    // Read URL params or set defaults
    const params = new URLSearchParams(window.location.search);
    for (const input of shape.inputs) {
      const valParam = params.get(input.id);
      const unitParam = params.get(`${input.id}_unit`);
      this.currentInputs[input.id] = {
        val: valParam !== null && !isNaN(Number(valParam)) ? Number(valParam) : input.defaultVal,
        unit: unitParam && LENGTH_UNITS[unitParam] ? unitParam : input.defaultUnit,
      };
    }

    // Update active highlight in shape cards
    const cards = document.querySelectorAll<HTMLButtonElement>('.shape-card');
    cards.forEach((card) => {
      const isSelected = card.getAttribute('data-shape-id') === shape.id;
      if (isSelected) {
        card.classList.add('border-primary', 'ring-2', 'ring-primary/20');
        card.classList.remove('border-hairline');
      } else {
        card.classList.remove('border-primary', 'ring-2', 'ring-primary/20');
        card.classList.add('border-hairline');
      }
    });

    this.renderActiveShape();
    this.updateUrlParams();
  }

  private renderActiveShape(): void {
    // 1. Update Title, Summary, Category
    const titleEl = document.getElementById('active-shape-title');
    if (titleEl) titleEl.textContent = this.activeShape.name;

    const summaryEl = document.getElementById('active-shape-summary');
    if (summaryEl) summaryEl.textContent = this.activeShape.summary;

    const badgeEl = document.getElementById('active-shape-badge');
    if (badgeEl) {
      badgeEl.textContent = this.activeShape.categoryLabel;
      badgeEl.className = `text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${this.activeShape.badgeColor}`;
    }

    const formulaBadgeEl = document.getElementById('active-formula-badge');
    if (formulaBadgeEl) formulaBadgeEl.textContent = this.activeShape.formula;

    const dedicatedLinkEl = document.getElementById('active-shape-dedicated-link') as HTMLAnchorElement | null;
    if (dedicatedLinkEl) {
      const slugMap: Record<string, string> = {
        cube: 'cube-volume-calculator',
        rectangular_prism: 'box-volume-calculator',
        cylinder: 'cylinder-volume-calculator',
        sphere: 'sphere-volume-calculator',
        cone: 'cone-volume-calculator',
        capsule: 'capsule-volume-calculator',
        spherical_cap: 'spherical-cap-volume-calculator',
        conical_frustum: 'conical-frustum-volume-calculator',
        ellipsoid: 'ellipsoid-volume-calculator',
        square_pyramid: 'square-pyramid-volume-calculator',
        rectangular_pyramid: 'rectangular-pyramid-volume-calculator',
        triangular_prism: 'triangular-prism-volume-calculator',
        hollow_cylinder: 'pipe-volume-calculator',
        torus: 'torus-volume-calculator',
        trapezoidal_prism: 'trapezoidal-prism-volume-calculator',
        horizontal_tank_fill: 'horizontal-tank-volume-calculator',
      };
      const slug = slugMap[this.activeShape.id] || 'cube-volume-calculator';
      dedicatedLinkEl.href = `/${slug}`;
      dedicatedLinkEl.innerHTML = `<span class="hidden sm:inline">${this.activeShape.name} Single Page</span><span class="sm:hidden">Single Page</span> <span>→</span>`;
    }

    // 2. Render SVG Diagram
    const svgTarget = document.getElementById('diagram-svg-target');
    if (svgTarget) {
      svgTarget.innerHTML = getShapeSvg(this.activeShape.id);
    }

    // 3. Render Presets
    this.renderPresets();

    // 4. Render Inputs Form
    this.renderInputsForm();

    // 5. Calculate
    this.recalculate();
  }

  private renderPresets(): void {
    const container = document.getElementById('presets-chips-container');
    if (!container) return;

    if (!this.activeShape.presets || this.activeShape.presets.length === 0) {
      container.innerHTML = `<span class="text-xs text-ink-faint">Standard geometry</span>`;
      return;
    }

    container.innerHTML = this.activeShape.presets
      .map(
        (preset, i) => `
        <button
          type="button"
          class="preset-chip px-2.5 py-1 text-xs rounded-md bg-canvas-soft border border-hairline text-ink hover:border-primary hover:text-primary transition-all active:scale-95 cursor-pointer font-medium"
          data-preset-index="${i}"
          title="${preset.description}"
        >
          ${preset.name}
        </button>
      `
      )
      .join('');

    container.querySelectorAll<HTMLButtonElement>('.preset-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const idx = Number(chip.getAttribute('data-preset-index'));
        const preset = this.activeShape.presets[idx];
        if (preset) {
          for (const [key, item] of Object.entries(preset.values)) {
            if (this.currentInputs[key]) {
              this.currentInputs[key] = { ...item };
            }
          }
          this.renderInputsForm();
          this.recalculate();
          this.updateUrlParams();
        }
      });
    });
  }

  private renderInputsForm(): void {
    const container = document.getElementById('dynamic-inputs-container');
    if (!container) return;

    const lengthUnitsArray = Object.values(LENGTH_UNITS);

    container.innerHTML = this.activeShape.inputs
      .map((input) => {
        const current = this.currentInputs[input.id] || { val: input.defaultVal, unit: input.defaultUnit };
        const unitOptions = lengthUnitsArray
          .map(
            (u) => `
          <option value="${u.id}" ${u.id === current.unit ? 'selected' : ''}>
            ${u.name} (${u.symbol})
          </option>
        `
          )
          .join('');

        return `
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between text-xs font-semibold text-ink">
            <label for="input-${input.id}" class="flex items-center gap-1.5">
              <span>${input.label}</span>
              <span class="font-mono text-ink-muted text-[11px]">(${input.symbol})</span>
            </label>
            ${input.description ? `<span class="text-[10px] text-ink-faint">${input.description}</span>` : ''}
          </div>

          <div class="flex items-center gap-2">
            <input
              type="number"
              id="input-${input.id}"
              data-input-id="${input.id}"
              value="${current.val}"
              step="${input.step || 'any'}"
              min="${input.min !== undefined ? input.min : '0'}"
              class="w-full px-3 py-2 text-sm font-mono rounded-md bg-white border border-hairline text-ink focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
            <label for="unit-${input.id}" class="sr-only">${input.label} measurement unit</label>
            <select
              id="unit-${input.id}"
              data-unit-for="${input.id}"
              aria-label="${input.label} measurement unit"
              class="px-2.5 py-2 text-xs font-medium rounded-md bg-canvas-soft border border-hairline text-ink focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              ${unitOptions}
            </select>
          </div>
        </div>
      `;
      })
      .join('');

    // Attach reactive input listeners
    this.activeShape.inputs.forEach((input) => {
      const numInput = document.getElementById(`input-${input.id}`) as HTMLInputElement | null;
      const unitSelect = document.getElementById(`unit-${input.id}`) as HTMLSelectElement | null;

      if (numInput) {
        numInput.addEventListener('input', (e) => {
          const val = parseFloat((e.target as HTMLInputElement).value);
          this.currentInputs[input.id].val = isNaN(val) ? 0 : val;
          this.recalculate();
          this.updateUrlParams();
        });
      }

      if (unitSelect) {
        unitSelect.addEventListener('change', (e) => {
          this.currentInputs[input.id].unit = (e.target as HTMLSelectElement).value;
          this.recalculate();
          this.updateUrlParams();
        });
      }
    });
  }

  private recalculate(): void {
    // 1. Run geometry formula
    const result = this.activeShape.calculate(this.currentInputs);
    const volumeM3 = result.volumeM3;

    // 2. Convert to current primary output unit
    const unitObj = VOLUME_UNITS[this.currentOutputUnit] || VOLUME_UNITS.m3;
    const convertedVolume = fromCubicMeters(volumeM3, this.currentOutputUnit);

    // 3. Update primary volume display
    const valEl = document.getElementById('primary-volume-value');
    if (valEl) valEl.textContent = formatNumber(convertedVolume);

    const unitLabelEl = document.getElementById('primary-volume-unit-label');
    if (unitLabelEl) unitLabelEl.textContent = unitObj.symbol;

    // Mobile bar
    const mobileValEl = document.getElementById('mobile-volume-val');
    if (mobileValEl) mobileValEl.textContent = formatNumber(convertedVolume);

    const mobileUnitEl = document.getElementById('mobile-volume-unit');
    if (mobileUnitEl) mobileUnitEl.textContent = unitObj.symbol;

    // 4. Update Secondary Metrics (Surface Area, Lateral Area)
    const saEl = document.getElementById('surface-area-value');
    if (saEl) {
      if (result.surfaceAreaM2 !== undefined) {
        saEl.textContent = `${formatNumber(result.surfaceAreaM2)} m²`;
      } else {
        saEl.textContent = 'N/A';
      }
    }

    const laEl = document.getElementById('lateral-area-value');
    if (laEl) {
      if (result.lateralAreaM2 !== undefined) {
        laEl.textContent = `${formatNumber(result.lateralAreaM2)} m²`;
      } else {
        laEl.textContent = 'N/A';
      }
    }

    // 5. Update Omni-Unit Breakdown Matrix Table
    this.renderMultiUnitMatrix(volumeM3);

    // 6. Update Step-by-Step Formula
    this.renderFormulaSteps(result.steps);

    // 7. Update Real-World Volume Equivalents
    this.renderEquivalents(volumeM3);
  }

  private renderMultiUnitMatrix(volumeM3: number): void {
    const tbody = document.getElementById('multi-unit-tbody');
    if (!tbody) return;

    const units = Object.values(VOLUME_UNITS);
    tbody.innerHTML = units
      .map((u) => {
        const converted = fromCubicMeters(volumeM3, u.id);
        const isCurrent = u.id === this.currentOutputUnit;
        return `
        <tr class="hover:bg-white/80 transition-colors ${isCurrent ? 'bg-primary/5 font-semibold text-primary' : 'text-ink'}">
          <td class="py-1.5 px-3">
            <span class="font-medium">${u.name}</span>
            <span class="font-mono text-ink-muted text-[11px] ml-1">(${u.symbol})</span>
          </td>
          <td class="py-1.5 px-3 text-right font-mono font-bold">
            ${formatNumber(converted)}
          </td>
        </tr>
      `;
      })
      .join('');
  }

  private renderFormulaSteps(steps: { label: string; equation: string; note?: string }[]): void {
    const container = document.getElementById('formula-steps-container');
    if (!container) return;

    container.innerHTML = steps
      .map(
        (step, index) => `
        <div class="p-2.5 rounded-lg bg-canvas-soft border border-hairline">
          <div class="flex items-center gap-1.5 text-ink-muted text-[11px] mb-1 font-semibold">
            <span class="w-4 h-4 rounded-full bg-white border border-hairline flex items-center justify-center text-[10px] text-ink font-bold">
              ${index + 1}
            </span>
            <span>${step.label}</span>
          </div>
          <div class="font-mono text-xs sm:text-sm font-bold text-ink pl-5 overflow-x-auto py-0.5">
            ${step.equation}
          </div>
        </div>
      `
      )
      .join('');
  }

  private renderEquivalents(volumeM3: number): void {
    const grid = document.getElementById('equivalents-cards-grid');
    if (!grid) return;

    const equivalents = getVolumeEquivalents(volumeM3);
    if (equivalents.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full p-4 rounded-lg bg-canvas-soft border border-hairline text-center">
          <span class="text-xs text-ink-muted">Scale is too extreme for everyday analogies</span>
        </div>
      `;
      return;
    }

    grid.innerHTML = equivalents
      .map(
        (item) => `
        <div class="p-3 rounded-lg bg-canvas-soft border border-hairline flex flex-col justify-between hover:border-ink-muted transition-colors">
          <div class="flex items-center gap-2.5 mb-1.5">
            <div class="w-8 h-8 rounded-lg bg-white border border-hairline flex items-center justify-center text-primary shrink-0 shadow-xs">
              ${item.iconSvg}
            </div>
            <div class="min-w-0">
              <span class="text-base font-extrabold text-ink font-mono block leading-none">
                ≈ ${item.formattedCount}
              </span>
              <span class="text-[11px] font-semibold text-ink-muted block mt-0.5 truncate">
                ${item.name}
              </span>
            </div>
          </div>
          <span class="text-[10px] text-ink-faint block">
            ${item.description}
          </span>
        </div>
      `
      )
      .join('');
  }

  private setupCopyAndShareListeners(): void {
    const copyBtn = document.getElementById('copy-result-btn');
    const copyText = document.getElementById('copy-btn-text');

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const val = document.getElementById('primary-volume-value')?.textContent || '';
        const unit = document.getElementById('primary-volume-unit-label')?.textContent || '';
        const shapeName = this.activeShape.name;
        const textToCopy = `${shapeName} Volume: ${val} ${unit} (Calculated with https://thevolumecalculator.com)`;

        try {
          await navigator.clipboard.writeText(textToCopy);
          if (copyText) copyText.textContent = 'Copied!';
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy';
          }, 2000);
        } catch {
          // Fallback
        }
      });
    }

    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        this.updateUrlParams();
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link with your current inputs copied to clipboard!');
        } catch {
          // Fallback
        }
      });
    }
  }
}

// Instantiate on client load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new VolumeCalculatorApp();
  });
}
