import { lengthToMeters, fromCubicMeters, formatNumber } from './units';
import { ICONS } from './icons';

export interface SimpleShapeInput {
  id: string;
  label: string;
  symbol: string;
  placeholder: string;
  defaultUnit: string;
}

export interface SimpleShape {
  id: string;
  name: string;
  icon: string;
  description: string;
  inputs: SimpleShapeInput[];
  calculateVolumeM3: (inputs: Record<string, { val: number; unit: string }>) => number;
}

export const SIMPLE_SHAPES: Record<string, SimpleShape> = {
  box: {
    id: 'box',
    name: 'Rectangular Box',
    icon: ICONS.box,
    description: 'Calculates the volume of boxes, shipping packages, rooms, and rectangular containers.',
    inputs: [
      { id: 'length', label: 'Length', symbol: 'l', placeholder: '0', defaultUnit: 'in' },
      { id: 'width', label: 'Width', symbol: 'w', placeholder: '0', defaultUnit: 'in' },
      { id: 'height', label: 'Height', symbol: 'h', placeholder: '0', defaultUnit: 'in' },
    ],
    calculateVolumeM3: (inputs) => {
      const l = lengthToMeters(inputs.length?.val || 0, inputs.length?.unit || 'in');
      const w = lengthToMeters(inputs.width?.val || 0, inputs.width?.unit || 'in');
      const h = lengthToMeters(inputs.height?.val || 0, inputs.height?.unit || 'in');
      if (l <= 0 || w <= 0 || h <= 0) return 0;
      return l * w * h;
    },
  },
  cylinder: {
    id: 'cylinder',
    name: 'Cylinder',
    icon: ICONS.cylinder,
    description: 'Calculates the volume of round cans, cups, water tanks, columns, and pipes.',
    inputs: [
      { id: 'radius', label: 'Radius', symbol: 'r', placeholder: '0', defaultUnit: 'in' },
      { id: 'height', label: 'Height', symbol: 'h', placeholder: '0', defaultUnit: 'in' },
    ],
    calculateVolumeM3: (inputs) => {
      const r = lengthToMeters(inputs.radius?.val || 0, inputs.radius?.unit || 'in');
      const h = lengthToMeters(inputs.height?.val || 0, inputs.height?.unit || 'in');
      if (r <= 0 || h <= 0) return 0;
      return Math.PI * r * r * h;
    },
  },
  sphere: {
    id: 'sphere',
    name: 'Sphere / Ball',
    icon: ICONS.sphere,
    description: 'Calculates the volume of balls, globes, spherical tanks, and domes.',
    inputs: [
      { id: 'radius', label: 'Radius', symbol: 'r', placeholder: '0', defaultUnit: 'in' },
    ],
    calculateVolumeM3: (inputs) => {
      const r = lengthToMeters(inputs.radius?.val || 0, inputs.radius?.unit || 'in');
      if (r <= 0) return 0;
      return (4 / 3) * Math.PI * Math.pow(r, 3);
    },
  },
  cube: {
    id: 'cube',
    name: 'Cube',
    icon: ICONS.cube,
    description: 'Calculates the volume of a cubic box with equal sides.',
    inputs: [
      { id: 'side', label: 'Side / Edge Length', symbol: 'a', placeholder: '0', defaultUnit: 'ft' },
    ],
    calculateVolumeM3: (inputs) => {
      const a = lengthToMeters(inputs.side?.val || 0, inputs.side?.unit || 'ft');
      if (a <= 0) return 0;
      return Math.pow(a, 3);
    },
  },
  cone: {
    id: 'cone',
    name: 'Cone',
    icon: ICONS.cone,
    description: 'Calculates the volume of cones, funnels, mounds, and conical piles.',
    inputs: [
      { id: 'radius', label: 'Base Radius', symbol: 'r', placeholder: '0', defaultUnit: 'in' },
      { id: 'height', label: 'Height', symbol: 'h', placeholder: '0', defaultUnit: 'in' },
    ],
    calculateVolumeM3: (inputs) => {
      const r = lengthToMeters(inputs.radius?.val || 0, inputs.radius?.unit || 'in');
      const h = lengthToMeters(inputs.height?.val || 0, inputs.height?.unit || 'in');
      if (r <= 0 || h <= 0) return 0;
      return (1 / 3) * Math.PI * r * r * h;
    },
  },
};

export class SimpleCalculatorApp {
  private activeShape: SimpleShape = SIMPLE_SHAPES.box;
  private currentInputs: Record<string, { val: number; unit: string }> = {};
  private activeUnit = 'gal';

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupShapeTabs();
    this.setupOutputUnitSelect();
    this.setupReset();
    this.setupCopy();
    this.selectShape(SIMPLE_SHAPES.box);
  }

  private setupShapeTabs(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.simple-shape-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const shapeId = tab.getAttribute('data-shape');
        if (shapeId && SIMPLE_SHAPES[shapeId]) {
          tabs.forEach((t) => {
            t.classList.remove('bg-primary', 'text-white', 'shadow-xs');
            t.classList.add('bg-white', 'text-ink-secondary', 'border-hairline');
          });
          tab.classList.add('bg-primary', 'text-white', 'shadow-xs');
          tab.classList.remove('bg-white', 'text-ink-secondary', 'border-hairline');

          this.selectShape(SIMPLE_SHAPES[shapeId]);
        }
      });
    });
  }

  private setupOutputUnitSelect(): void {
    const select = document.getElementById('simple-output-unit-select') as HTMLSelectElement | null;
    if (!select) return;
    select.addEventListener('change', (e) => {
      this.activeUnit = (e.target as HTMLSelectElement).value;
      this.recalculate();
    });
  }

  private setupReset(): void {
    const resetBtn = document.getElementById('simple-reset-btn');
    if (!resetBtn) return;
    resetBtn.addEventListener('click', () => {
      // Clear all input values
      for (const input of this.activeShape.inputs) {
        this.currentInputs[input.id] = { val: NaN, unit: input.defaultUnit };
        const inputEl = document.getElementById(`simple-in-${input.id}`) as HTMLInputElement | null;
        if (inputEl) inputEl.value = '';
      }
      this.recalculate();
    });
  }

  private setupCopy(): void {
    const copyBtn = document.getElementById('simple-copy-btn');
    if (!copyBtn) return;
    copyBtn.addEventListener('click', async () => {
      const val = document.getElementById('simple-volume-value')?.textContent || '';
      const unitSelect = document.getElementById('simple-output-unit-select') as HTMLSelectElement | null;
      const unitText = unitSelect?.options[unitSelect.selectedIndex]?.text || this.activeUnit;
      const text = `${this.activeShape.name} Volume: ${val} ${unitText}`;
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

  private selectShape(shape: SimpleShape): void {
    this.activeShape = shape;
    this.currentInputs = {};

    // Initialize inputs with NaN (empty, no auto-filled data)
    for (const input of shape.inputs) {
      this.currentInputs[input.id] = { val: NaN, unit: input.defaultUnit };
    }

    // Update UI header with clean SVG badge
    const titleEl = document.getElementById('simple-shape-title');
    if (titleEl) {
      titleEl.innerHTML = `
        <span class="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
          ${shape.icon}
        </span>
        <span>${shape.name}</span>
      `;
    }

    const descEl = document.getElementById('simple-shape-desc');
    if (descEl) descEl.textContent = shape.description;

    const dedicatedLink = document.getElementById('simple-dedicated-link') as HTMLAnchorElement | null;
    if (dedicatedLink) {
      const slugMap: Record<string, string> = {
        box: 'box-volume-calculator',
        cylinder: 'cylinder-volume-calculator',
        sphere: 'sphere-volume-calculator',
        cube: 'cube-volume-calculator',
        cone: 'cone-volume-calculator',
      };
      const slug = slugMap[shape.id] || 'box-volume-calculator';
      dedicatedLink.href = `/${slug}`;
      dedicatedLink.title = `Open standalone ${shape.name} calculator`;
    }

    this.renderInputs();
    this.recalculate();
  }

  private renderInputs(): void {
    const container = document.getElementById('simple-inputs-container');
    if (!container) return;

    const units = [
      { id: 'in', label: 'Inches (in)' },
      { id: 'ft', label: 'Feet (ft)' },
      { id: 'cm', label: 'Centimeters (cm)' },
      { id: 'm', label: 'Meters (m)' },
      { id: 'yd', label: 'Yards (yd)' },
    ];

    container.innerHTML = this.activeShape.inputs
      .map((input) => {
        const cur = this.currentInputs[input.id];
        const unitOpts = units
          .map((u) => `<option value="${u.id}" ${u.id === cur.unit ? 'selected' : ''}>${u.label}</option>`)
          .join('');

        const valDisplay = isNaN(cur.val) ? '' : String(cur.val);

        return `
        <div class="flex flex-col gap-1.5">
          <label for="simple-in-${input.id}" class="text-xs font-semibold text-ink flex items-center justify-between">
            <span>${input.label} (${input.symbol})</span>
          </label>
          <div class="flex items-center gap-2">
            <input
              type="number"
              id="simple-in-${input.id}"
              data-id="${input.id}"
              value="${valDisplay}"
              placeholder="${input.placeholder}"
              step="any"
              min="0"
              class="w-full px-3.5 py-2.5 text-base font-mono rounded-lg bg-white border border-hairline text-ink focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
            <select
              id="simple-unit-${input.id}"
              data-unit-for="${input.id}"
              class="px-3 py-2.5 text-xs font-medium rounded-lg bg-canvas-soft border border-hairline text-ink focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shrink-0"
            >
              ${unitOpts}
            </select>
          </div>
        </div>
      `;
      })
      .join('');

    // Attach listeners
    this.activeShape.inputs.forEach((input) => {
      const num = document.getElementById(`simple-in-${input.id}`) as HTMLInputElement | null;
      const unit = document.getElementById(`simple-unit-${input.id}`) as HTMLSelectElement | null;

      if (num) {
        num.addEventListener('input', (e) => {
          const raw = (e.target as HTMLInputElement).value.trim();
          const val = raw === '' ? NaN : parseFloat(raw);
          this.currentInputs[input.id].val = val;
          this.recalculate();
        });
      }

      if (unit) {
        unit.addEventListener('change', (e) => {
          this.currentInputs[input.id].unit = (e.target as HTMLSelectElement).value;
          this.recalculate();
        });
      }
    });
  }

  private recalculate(): void {
    const valEl = document.getElementById('simple-volume-value');
    if (!valEl) return;

    // Check if any required input is not provided
    const allFilled = this.activeShape.inputs.every((input) => {
      const val = this.currentInputs[input.id]?.val;
      return !isNaN(val) && val > 0;
    });

    if (!allFilled) {
      valEl.textContent = '0.00';
      return;
    }

    const volumeM3 = this.activeShape.calculateVolumeM3(this.currentInputs);
    if (volumeM3 <= 0 || isNaN(volumeM3)) {
      valEl.textContent = '0.00';
      return;
    }

    const converted = fromCubicMeters(volumeM3, this.activeUnit);
    valEl.textContent = formatNumber(converted, 3);
  }
}

// Initialize on load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new SimpleCalculatorApp();
  });
}
