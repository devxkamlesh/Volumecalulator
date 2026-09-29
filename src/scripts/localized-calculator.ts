import { SIMPLE_SHAPES, type SimpleShape } from './simple-calculator';
import { formatNumber, fromCubicMeters } from './units';

type System = 'metric' | 'imperial';
interface Config {
  locale: string;
  defaultSystem: System;
  defaultOutputUnit: string;
  labels: Record<string, string>;
  shapeNames: Record<string, string>;
  inputLabels: Record<string, string>;
}

function initLocalizedCalculator(): void {
  const root = document.querySelector<HTMLElement>('[data-locale-calculator]');
  const configNode = document.querySelector<HTMLScriptElement>('#locale-calculator-config');
  if (!root || !configNode?.textContent) return;
  const config = JSON.parse(configNode.textContent) as Config;
  let shape: SimpleShape = SIMPLE_SHAPES.box;
  let system: System = config.defaultSystem;
  let outputUnit = config.defaultOutputUnit;
  const values: Record<string, { val: number; unit: string }> = {};

  const inputsContainer = document.querySelector<HTMLElement>('#locale-inputs');
  const result = document.querySelector<HTMLElement>('#locale-result');
  const resultUnit = document.querySelector<HTMLElement>('#locale-result-unit');
  const outputSelect = document.querySelector<HTMLSelectElement>('#locale-output-unit');
  const title = document.querySelector<HTMLElement>('#locale-shape-title');

  function unitsForSystem(): { id: string; label: string }[] {
    return system === 'metric'
      ? [{ id: 'mm', label: 'mm' }, { id: 'cm', label: 'cm' }, { id: 'm', label: 'm' }]
      : [{ id: 'in', label: 'in' }, { id: 'ft', label: 'ft' }, { id: 'yd', label: 'yd' }];
  }

  function resetValues(): void {
    for (const input of shape.inputs) values[input.id] = { val: Number.NaN, unit: system === 'metric' ? 'cm' : 'in' };
  }

  function recalculate(): void {
    if (!result || !resultUnit) return;
    if (!shape.inputs.every((input) => Number.isFinite(values[input.id]?.val) && values[input.id].val > 0)) {
      result.textContent = '0.00';
      resultUnit.textContent = outputSelect?.selectedOptions[0]?.textContent || outputUnit;
      return;
    }
    const volumeM3 = shape.calculateVolumeM3(values);
    result.textContent = formatNumber(fromCubicMeters(volumeM3, outputUnit), 3);
    resultUnit.textContent = outputSelect?.selectedOptions[0]?.textContent || outputUnit;
  }

  function renderInputs(force = true): void {
    if (!inputsContainer) return;
    const units = unitsForSystem();
    const alreadyRendered =
      !force &&
      shape.inputs.every(
        (input) =>
          document.querySelector(`#locale-${input.id}`) !== null &&
          document.querySelector(`#locale-unit-${input.id}`) !== null
      );

    if (!alreadyRendered) {
      inputsContainer.innerHTML = shape.inputs.map((input) => `
        <div class="space-y-1.5">
          <label for="locale-${input.id}" class="text-xs font-bold text-ink">${config.inputLabels[input.id] || input.label} (${input.symbol})</label>
          <div class="flex gap-2">
            <input id="locale-${input.id}" type="number" min="0" step="any" inputmode="decimal" class="min-h-11 w-full px-3 rounded-lg bg-white border border-hairline text-ink font-mono" />
            <select id="locale-unit-${input.id}" class="min-h-11 px-3 rounded-lg bg-canvas-soft border border-hairline text-ink font-semibold">
              ${units.map((unit) => `<option value="${unit.id}" ${unit.id === values[input.id].unit ? 'selected' : ''}>${unit.label}</option>`).join('')}
            </select>
          </div>
        </div>`).join('');
    }

    for (const input of shape.inputs) {
      const numberInput = document.querySelector<HTMLInputElement>(`#locale-${input.id}`);
      const unitSelect = document.querySelector<HTMLSelectElement>(`#locale-unit-${input.id}`);
      if (unitSelect && !values[input.id].unit) {
        values[input.id].unit = unitSelect.value;
      }
      if (numberInput && numberInput.value.trim() !== '') {
        values[input.id].val = Number(numberInput.value);
      }
      numberInput?.addEventListener('input', () => { values[input.id].val = numberInput.value === '' ? Number.NaN : Number(numberInput.value); recalculate(); });
      unitSelect?.addEventListener('change', () => { values[input.id].unit = unitSelect.value; recalculate(); });
    }
  }

  function selectShape(next: SimpleShape): void {
    shape = next;
    resetValues();
    if (title) title.textContent = config.shapeNames[shape.id] || shape.name;
    renderInputs(true);
    recalculate();
  }

  document.querySelectorAll<HTMLButtonElement>('.locale-shape-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll<HTMLButtonElement>('.locale-shape-btn').forEach((item) => {
        item.classList.remove('bg-primary', 'text-white'); item.classList.add('bg-white', 'border', 'border-hairline', 'text-ink-secondary'); item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('bg-primary', 'text-white'); button.classList.remove('bg-white', 'border', 'border-hairline', 'text-ink-secondary'); button.setAttribute('aria-pressed', 'true');
      selectShape(SIMPLE_SHAPES[button.dataset.shape || 'box'] || SIMPLE_SHAPES.box);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.locale-system-btn').forEach((button) => {
    button.addEventListener('click', () => {
      system = button.dataset.system === 'imperial' ? 'imperial' : 'metric';
      document.querySelectorAll<HTMLButtonElement>('.locale-system-btn').forEach((item) => { item.classList.toggle('bg-primary', item === button); item.classList.toggle('text-white', item === button); item.classList.toggle('text-ink-muted', item !== button); item.setAttribute('aria-pressed', String(item === button)); });
      outputUnit = system === 'metric' ? 'L' : 'gal';
      if (outputSelect) outputSelect.value = outputUnit;
      resetValues(); renderInputs(true); recalculate();
    });
  });

  outputSelect?.addEventListener('change', () => { outputUnit = outputSelect.value; recalculate(); });
  document.querySelector('#locale-clear')?.addEventListener('click', () => { resetValues(); renderInputs(true); recalculate(); });
  document.querySelector('#locale-copy')?.addEventListener('click', async () => {
    if (!result || result.textContent === '0.00') return;
    await navigator.clipboard.writeText(`${result.textContent} ${resultUnit?.textContent || ''}`);
  });

  resetValues(); renderInputs(false); recalculate();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLocalizedCalculator);
else initLocalizedCalculator();
