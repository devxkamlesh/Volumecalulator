import { lengthToMeters } from './units';

export interface ShapeInput {
  id: string;
  label: string;
  symbol: string;
  defaultVal: number;
  defaultUnit: string;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

export interface Preset {
  name: string;
  description: string;
  values: Record<string, { val: number; unit: string }>;
}

export interface CalculationResult {
  volumeM3: number;
  surfaceAreaM2?: number;
  lateralAreaM2?: number;
  formulaDisplay: string;
  steps: { label: string; equation: string; note?: string }[];
}

export interface ShapeDefinition {
  id: string;
  name: string;
  category: 'basic' | 'curved' | 'prisms_pyramids' | 'tanks_pipes';
  categoryLabel: string;
  badgeColor: string; // Notion sticker color class
  iconSvg: string;
  summary: string;
  formula: string;
  surfaceAreaFormula?: string;
  inputs: ShapeInput[];
  presets: Preset[];
  calculate: (rawInputs: Record<string, { val: number; unit: string }>) => CalculationResult;
}

export const SHAPES: Record<string, ShapeDefinition> = {
  // 1. CUBE
  cube: {
    id: 'cube',
    name: 'Cube',
    category: 'basic',
    categoryLabel: 'Basic 3D',
    badgeColor: 'bg-[#f3e8ff] dark:bg-[#581c87]/40 text-[#581c87] dark:text-[#d8b4fe] border-[#d8b4fe] dark:border-[#7e22ce]',
    summary: 'A 3D solid bounded by six equal square faces with equal edges.',
    formula: 'V = a^3',
    surfaceAreaFormula: 'A = 6a^2',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M21 16.5V7.5L12 2L3 7.5V16.5L12 22L21 16.5Z"/><path d="M3 7.5L12 13L21 7.5"/><path d="M12 13V22"/></svg>`,
    inputs: [
      { id: 'edge', label: 'Edge Length', symbol: 'a', defaultVal: 2, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Standard Dice', description: '16mm board game dice', values: { edge: { val: 16, unit: 'mm' } } },
      { name: 'Rubik\'s Cube', description: 'Standard 57mm cube', values: { edge: { val: 5.7, unit: 'cm' } } },
      { name: 'Storage Box', description: '1 ft cube container', values: { edge: { val: 1, unit: 'ft' } } },
    ],
    calculate: (inputs) => {
      const a = lengthToMeters(inputs.edge.val, inputs.edge.unit);
      const volumeM3 = Math.pow(a, 3);
      const surfaceAreaM2 = 6 * Math.pow(a, 2);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = a³`,
        steps: [
          { label: 'Edge converted to meters', equation: `a = ${a.toFixed(4)} m` },
          { label: 'Volume formula', equation: `V = a³ = (${a.toFixed(4)})³` },
          { label: 'Calculated Volume', equation: `V = ${volumeM3.toFixed(6)} m³` },
          { label: 'Total Surface Area', equation: `A = 6 × a² = 6 × (${a.toFixed(4)})² = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 2. RECTANGULAR PRISM / BOX
  rectangular_prism: {
    id: 'rectangular_prism',
    name: 'Rectangular Prism / Box',
    category: 'basic',
    categoryLabel: 'Basic 3D',
    badgeColor: 'bg-[#e0f2fe] dark:bg-[#0369a1]/40 text-[#0c4a6e] dark:text-[#7dd3fc] border-[#7dd3fc] dark:border-[#0284c7]',
    summary: 'A 3D box shape with six rectangular faces (also called cuboid).',
    formula: 'V = l \\times w \\times h',
    surfaceAreaFormula: 'A = 2(lw + lh + wh)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M2 17L9 21L22 14L15 10L2 17Z"/><path d="M2 7L9 11L22 4L15 0.5L2 7Z"/><path d="M2 7V17"/><path d="M9 11V21"/><path d="M22 4V14"/></svg>`,
    inputs: [
      { id: 'length', label: 'Length', symbol: 'l', defaultVal: 3, defaultUnit: 'm', min: 0 },
      { id: 'width', label: 'Width', symbol: 'w', defaultVal: 2, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Shoebox', description: 'Standard shoe packaging', values: { length: { val: 35, unit: 'cm' }, width: { val: 20, unit: 'cm' }, height: { val: 12, unit: 'cm' } } },
      { name: 'USPS Medium Box', description: 'Priority mail flat rate', values: { length: { val: 11, unit: 'in' }, width: { val: 8.5, unit: 'in' }, height: { val: 5.5, unit: 'in' } } },
      { name: '20ft Shipping Container', description: 'Standard ISO freight', values: { length: { val: 5.9, unit: 'm' }, width: { val: 2.35, unit: 'm' }, height: { val: 2.39, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const l = lengthToMeters(inputs.length.val, inputs.length.unit);
      const w = lengthToMeters(inputs.width.val, inputs.width.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = l * w * h;
      const surfaceAreaM2 = 2 * (l * w + l * h + w * h);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = l × w × h`,
        steps: [
          { label: 'Length, Width, Height in meters', equation: `l = ${l.toFixed(4)} m, w = ${w.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = ${l.toFixed(4)} × ${w.toFixed(4)} × ${h.toFixed(4)}` },
          { label: 'Calculated Volume', equation: `V = ${volumeM3.toFixed(6)} m³` },
          { label: 'Surface Area', equation: `A = 2 × (${(l*w).toFixed(4)} + ${(l*h).toFixed(4)} + ${(w*h).toFixed(4)}) = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 3. CYLINDER
  cylinder: {
    id: 'cylinder',
    name: 'Cylinder',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#ccfbf1] dark:bg-[#115e59]/40 text-[#134e4a] dark:text-[#5eead4] border-[#5eead4] dark:border-[#0f766e]',
    summary: 'A geometric solid with parallel circular bases connected by a curved surface.',
    formula: 'V = \\pi r^2 h',
    surfaceAreaFormula: 'A = 2\\pi r(r + h)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V5"/><path d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12"/></svg>`,
    inputs: [
      { id: 'radius', label: 'Radius', symbol: 'r', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 2, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: '12 oz Soda Can', description: 'Standard aluminum drink can', values: { radius: { val: 3.3, unit: 'cm' }, height: { val: 12.2, unit: 'cm' } } },
      { name: '55 Gallon Drum', description: 'Standard industrial barrel', values: { radius: { val: 11.25, unit: 'in' }, height: { val: 33.5, unit: 'in' } } },
      { name: 'Coffee Cup', description: 'Standard cylindrical mug', values: { radius: { val: 4, unit: 'cm' }, height: { val: 9.5, unit: 'cm' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.radius.val, inputs.radius.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = Math.PI * Math.pow(r, 2) * h;
      const lateralAreaM2 = 2 * Math.PI * r * h;
      const surfaceAreaM2 = 2 * Math.PI * r * (r + h);
      return {
        volumeM3,
        surfaceAreaM2,
        lateralAreaM2,
        formulaDisplay: `V = π × r² × h`,
        steps: [
          { label: 'Radius and Height in meters', equation: `r = ${r.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Base Area', equation: `A_{base} = π × r² = π × (${r.toFixed(4)})² = ${(Math.PI * r * r).toFixed(4)} m²` },
          { label: 'Volume calculation', equation: `V = ${(Math.PI * r * r).toFixed(4)} × ${h.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
          { label: 'Total Surface Area', equation: `A = 2πr(r + h) = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 4. SPHERE
  sphere: {
    id: 'sphere',
    name: 'Sphere',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#fce7f3] dark:bg-[#9d174d]/40 text-[#831843] dark:text-[#f472b6] border-[#f472b6] dark:border-[#be185d]',
    summary: 'A perfectly round 3D geometrical object where every point is equidistant from the center.',
    formula: 'V = \\frac{4}{3} \\pi r^3',
    surfaceAreaFormula: 'A = 4\\pi r^2',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/></svg>`,
    inputs: [
      { id: 'radius', label: 'Radius', symbol: 'r', defaultVal: 1, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Basketball', description: 'Official Size 7 ball', values: { radius: { val: 12.1, unit: 'cm' } } },
      { name: 'Tennis Ball', description: 'Standard regulation ball', values: { radius: { val: 3.35, unit: 'cm' } } },
      { name: 'Planet Earth', description: 'Mean radius of Earth', values: { radius: { val: 6371, unit: 'km' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.radius.val, inputs.radius.unit);
      const volumeM3 = (4 / 3) * Math.PI * Math.pow(r, 3);
      const surfaceAreaM2 = 4 * Math.PI * Math.pow(r, 2);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⁴⁄₃ × π × r³`,
        steps: [
          { label: 'Radius in meters', equation: `r = ${r.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = ⁴⁄₃ × π × (${r.toFixed(4)})³` },
          { label: 'Calculated Volume', equation: `V = ${volumeM3.toFixed(6)} m³` },
          { label: 'Surface Area', equation: `A = 4πr² = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 5. CONE
  cone: {
    id: 'cone',
    name: 'Cone',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#ffedd5] dark:bg-[#9a3412]/40 text-[#7c2d12] dark:text-[#fb923c] border-[#fb923c] dark:border-[#c2410c]',
    summary: 'A 3D shape that tapers smoothly from a flat circular base to a point called the apex.',
    formula: 'V = \\frac{1}{3} \\pi r^2 h',
    surfaceAreaFormula: 'A = \\pi r(r + \\sqrt{h^2 + r^2})',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M12 2L3 19C3 20.66 7 22 12 22C17 22 21 20.66 21 19L12 2Z"/><ellipse cx="12" cy="19" rx="9" ry="3"/></svg>`,
    inputs: [
      { id: 'radius', label: 'Base Radius', symbol: 'r', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 2, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Traffic Cone', description: 'Standard 28" highway cone', values: { radius: { val: 18, unit: 'cm' }, height: { val: 70, unit: 'cm' } } },
      { name: 'Ice Cream Cone', description: 'Standard waffle cone', values: { radius: { val: 3, unit: 'cm' }, height: { val: 12, unit: 'cm' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.radius.val, inputs.radius.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
      const slant = Math.sqrt(r * r + h * h);
      const surfaceAreaM2 = Math.PI * r * (r + slant);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⅓ × π × r² × h`,
        steps: [
          { label: 'Radius and Height in meters', equation: `r = ${r.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Slant height (s)', equation: `s = √(r² + h²) = ${slant.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = ⅓ × π × (${r.toFixed(4)})² × ${h.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
          { label: 'Surface Area', equation: `A = πr(r + s) = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 6. CAPSULE
  capsule: {
    id: 'capsule',
    name: 'Capsule',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#dcfce7] dark:bg-[#166534]/40 text-[#14532d] dark:text-[#4ade80] border-[#4ade80] dark:border-[#15803d]',
    summary: 'A cylinder with hemispherical ends (caps), common in pharmaceuticals and pressure vessels.',
    formula: 'V = \\pi r^2 (\\frac{4}{3}r + a)',
    surfaceAreaFormula: 'A = 2\\pi r(2r + a)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M5 8C5 4.13 8.13 1 12 1C15.87 1 19 4.13 19 8V16C19 19.87 15.87 23 12 23C8.13 23 5 19.87 5 16V8Z"/><path d="M5 8H19"/><path d="M5 16H19"/></svg>`,
    inputs: [
      { id: 'radius', label: 'Radius', symbol: 'r', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'cylHeight', label: 'Cylinder Length', symbol: 'a', defaultVal: 3, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Gel Medication Pill', description: 'Size 00 capsule', values: { radius: { val: 4.25, unit: 'mm' }, cylHeight: { val: 14.8, unit: 'mm' } } },
      { name: 'LPG Storage Tank', description: 'Bullet propane tank', values: { radius: { val: 1.2, unit: 'm' }, cylHeight: { val: 5, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.radius.val, inputs.radius.unit);
      const a = lengthToMeters(inputs.cylHeight.val, inputs.cylHeight.unit);
      const volumeM3 = Math.PI * Math.pow(r, 2) * ((4 / 3) * r + a);
      const surfaceAreaM2 = 2 * Math.PI * r * (2 * r + a);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = πr²(⁴⁄₃r + a)`,
        steps: [
          { label: 'Dimensions in meters', equation: `r = ${r.toFixed(4)} m, cylinder length a = ${a.toFixed(4)} m` },
          { label: 'Spherical caps volume', equation: `V_{sphere} = ⁴⁄₃ × π × r³ = ${((4/3) * Math.PI * Math.pow(r, 3)).toFixed(6)} m³` },
          { label: 'Cylinder body volume', equation: `V_{cyl} = π × r² × a = ${(Math.PI * Math.pow(r, 2) * a).toFixed(6)} m³` },
          { label: 'Total Volume', equation: `V = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 7. SPHERICAL CAP / BOWL
  spherical_cap: {
    id: 'spherical_cap',
    name: 'Spherical Cap / Dome',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#f3e8ff] dark:bg-[#581c87]/40 text-[#581c87] dark:text-[#d8b4fe] border-[#d8b4fe] dark:border-[#7e22ce]',
    summary: 'A portion of a sphere cut off by a plane (dome or bowl shape).',
    formula: 'V = \\frac{\\pi h}{6}(3r^2 + h^2)',
    surfaceAreaFormula: 'A = \\pi(r^2 + h^2)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M3 15C3 8.37 7.03 3 12 3C16.97 3 21 8.37 21 15"/><ellipse cx="12" cy="15" rx="9" ry="3"/></svg>`,
    inputs: [
      { id: 'baseRadius', label: 'Base Radius', symbol: 'r', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Cap Height', symbol: 'h', defaultVal: 0.8, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Cereal Bowl', description: 'Standard soup/cereal bowl', values: { baseRadius: { val: 7.5, unit: 'cm' }, height: { val: 5, unit: 'cm' } } },
      { name: 'Observatory Dome', description: 'Telescope dome structure', values: { baseRadius: { val: 8, unit: 'm' }, height: { val: 5.5, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.baseRadius.val, inputs.baseRadius.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = (Math.PI * h / 6) * (3 * Math.pow(r, 2) + Math.pow(h, 2));
      const sphereR = (r * r + h * h) / (2 * h);
      const surfaceAreaM2 = Math.PI * (r * r + h * h);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⅙ × π × h × (3r² + h²)`,
        steps: [
          { label: 'Radius and Height in meters', equation: `r = ${r.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Corresponding full sphere radius (R)', equation: `R = (r² + h²) / (2h) = ${sphereR.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = (π × ${h.toFixed(4)} / 6) × (3 × ${Math.pow(r, 2).toFixed(4)} + ${Math.pow(h, 2).toFixed(4)}) = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 8. CONICAL FRUSTUM
  conical_frustum: {
    id: 'conical_frustum',
    name: 'Conical Frustum (Truncated Cone)',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#e0f2fe] dark:bg-[#0369a1]/40 text-[#0c4a6e] dark:text-[#7dd3fc] border-[#7dd3fc] dark:border-[#0284c7]',
    summary: 'The portion of a cone that lies between two parallel planes cutting it (e.g. buckets, cups, flower pots).',
    formula: 'V = \\frac{\\pi h}{3}(r_1^2 + r_1 r_2 + r_2^2)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="12" cy="5" rx="5" ry="2"/><ellipse cx="12" cy="19" rx="8" ry="3"/><path d="M7 5L4 19"/><path d="M17 5L20 19"/></svg>`,
    inputs: [
      { id: 'topRadius', label: 'Top Radius', symbol: 'r₁', defaultVal: 0.8, defaultUnit: 'm', min: 0 },
      { id: 'bottomRadius', label: 'Bottom Radius', symbol: 'r₂', defaultVal: 1.2, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Standard 5-Gal Bucket', description: 'Paint/utility bucket', values: { topRadius: { val: 6, unit: 'in' }, bottomRadius: { val: 5.2, unit: 'in' }, height: { val: 14.5, unit: 'in' } } },
      { name: 'Takeout Coffee Cup', description: '16 oz paper cup', values: { topRadius: { val: 4.5, unit: 'cm' }, bottomRadius: { val: 3.2, unit: 'cm' }, height: { val: 13, unit: 'cm' } } },
    ],
    calculate: (inputs) => {
      const r1 = lengthToMeters(inputs.topRadius.val, inputs.topRadius.unit);
      const r2 = lengthToMeters(inputs.bottomRadius.val, inputs.bottomRadius.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = (Math.PI * h / 3) * (r1 * r1 + r1 * r2 + r2 * r2);
      const slant = Math.sqrt(Math.pow(r2 - r1, 2) + h * h);
      const surfaceAreaM2 = Math.PI * (r1 * r1 + r2 * r2 + (r1 + r2) * slant);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⅓ × π × h × (r₁² + r₁r₂ + r₂²)`,
        steps: [
          { label: 'Radii and Height in meters', equation: `r₁ = ${r1.toFixed(4)} m, r₂ = ${r2.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Volume formula', equation: `V = (π × ${h.toFixed(4)} / 3) × (${(r1*r1).toFixed(4)} + ${(r1*r2).toFixed(4)} + ${(r2*r2).toFixed(4)})` },
          { label: 'Calculated Volume', equation: `V = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 9. ELLIPSOID
  ellipsoid: {
    id: 'ellipsoid',
    name: 'Ellipsoid',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#ccfbf1] dark:bg-[#115e59]/40 text-[#134e4a] dark:text-[#5eead4] border-[#5eead4] dark:border-[#0f766e]',
    summary: 'A 3D surface whose cross sections in all planes are ellipses (rugby ball, watermelon, planets).',
    formula: 'V = \\frac{4}{3} \\pi a b c',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="12" cy="12" rx="10" ry="6"/><ellipse cx="12" cy="12" rx="10" ry="2.5"/></svg>`,
    inputs: [
      { id: 'a', label: 'Semi-axis a', symbol: 'a', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'b', label: 'Semi-axis b', symbol: 'b', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
      { id: 'c', label: 'Semi-axis c', symbol: 'c', defaultVal: 2, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Watermelon', description: 'Oblong picnic watermelon', values: { a: { val: 12, unit: 'cm' }, b: { val: 12, unit: 'cm' }, c: { val: 18, unit: 'cm' } } },
      { name: 'American Football', description: 'Official regulation NFL ball', values: { a: { val: 8.5, unit: 'cm' }, b: { val: 8.5, unit: 'cm' }, c: { val: 14, unit: 'cm' } } },
    ],
    calculate: (inputs) => {
      const a = lengthToMeters(inputs.a.val, inputs.a.unit);
      const b = lengthToMeters(inputs.b.val, inputs.b.unit);
      const c = lengthToMeters(inputs.c.val, inputs.c.unit);
      const volumeM3 = (4 / 3) * Math.PI * a * b * c;
      // Knud Thomsen approximation for ellipsoid surface area:
      const p = 1.6075;
      const surfaceAreaM2 = 4 * Math.PI * Math.pow((Math.pow(a*b, p) + Math.pow(a*c, p) + Math.pow(b*c, p)) / 3, 1 / p);
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⁴⁄₃ × π × a × b × c`,
        steps: [
          { label: 'Semi-axes in meters', equation: `a = ${a.toFixed(4)} m, b = ${b.toFixed(4)} m, c = ${c.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = ⁴⁄₃ × π × ${a.toFixed(4)} × ${b.toFixed(4)} × ${c.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
          { label: 'Approximate Surface Area', equation: `A ≈ ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 10. SQUARE PYRAMID
  square_pyramid: {
    id: 'square_pyramid',
    name: 'Square Pyramid',
    category: 'prisms_pyramids',
    categoryLabel: 'Prisms & Pyramids',
    badgeColor: 'bg-[#fce7f3] dark:bg-[#9d174d]/40 text-[#831843] dark:text-[#f472b6] border-[#f472b6] dark:border-[#be185d]',
    summary: 'A pyramid with a square base and four triangular faces meeting at an apex point.',
    formula: 'V = \\frac{1}{3} a^2 h',
    surfaceAreaFormula: 'A = a^2 + 2a\\sqrt{\\frac{a^2}{4} + h^2}',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M12 2L2 19L12 22L22 19L12 2Z"/><path d="M12 2V22"/></svg>`,
    inputs: [
      { id: 'baseEdge', label: 'Base Edge', symbol: 'a', defaultVal: 2, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 3, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Great Pyramid of Giza', description: 'Ancient pyramid original size', values: { baseEdge: { val: 230.3, unit: 'm' }, height: { val: 146.6, unit: 'm' } } },
      { name: 'Louvre Pyramid', description: 'Paris museum glass entrance', values: { baseEdge: { val: 35.4, unit: 'm' }, height: { val: 21.6, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const a = lengthToMeters(inputs.baseEdge.val, inputs.baseEdge.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = (1 / 3) * Math.pow(a, 2) * h;
      const slant = Math.sqrt(Math.pow(a / 2, 2) + Math.pow(h, 2));
      const surfaceAreaM2 = a * a + 2 * a * slant;
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = ⅓ × a² × h`,
        steps: [
          { label: 'Base Edge and Height in meters', equation: `a = ${a.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Base Area', equation: `A_{base} = a² = ${Math.pow(a, 2).toFixed(4)} m²` },
          { label: 'Volume calculation', equation: `V = ⅓ × ${Math.pow(a, 2).toFixed(4)} × ${h.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
          { label: 'Surface Area', equation: `A = a² + 2as = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 11. RECTANGULAR PYRAMID
  rectangular_pyramid: {
    id: 'rectangular_pyramid',
    name: 'Rectangular Pyramid',
    category: 'prisms_pyramids',
    categoryLabel: 'Prisms & Pyramids',
    badgeColor: 'bg-[#ffedd5] dark:bg-[#9a3412]/40 text-[#7c2d12] dark:text-[#fb923c] border-[#fb923c] dark:border-[#c2410c]',
    summary: 'A pyramid with a rectangular base and four triangular sides.',
    formula: 'V = \\frac{1}{3} l w h',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M12 2L3 18L10 22L21 18L12 2Z"/><path d="M12 2L10 22"/></svg>`,
    inputs: [
      { id: 'length', label: 'Base Length', symbol: 'l', defaultVal: 3, defaultUnit: 'm', min: 0 },
      { id: 'width', label: 'Base Width', symbol: 'w', defaultVal: 2, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Height', symbol: 'h', defaultVal: 2.5, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Pyramid Roof', description: 'Residential hip roof cap', values: { length: { val: 12, unit: 'ft' }, width: { val: 8, unit: 'ft' }, height: { val: 6, unit: 'ft' } } },
    ],
    calculate: (inputs) => {
      const l = lengthToMeters(inputs.length.val, inputs.length.unit);
      const w = lengthToMeters(inputs.width.val, inputs.width.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const volumeM3 = (1 / 3) * l * w * h;
      return {
        volumeM3,
        formulaDisplay: `V = ⅓ × l × w × h`,
        steps: [
          { label: 'Base Dimensions and Height in meters', equation: `l = ${l.toFixed(4)} m, w = ${w.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Base Area', equation: `A_{base} = l × w = ${(l * w).toFixed(4)} m²` },
          { label: 'Volume calculation', equation: `V = ⅓ × ${(l * w).toFixed(4)} × ${h.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 12. TRIANGULAR PRISM
  triangular_prism: {
    id: 'triangular_prism',
    name: 'Triangular Prism',
    category: 'prisms_pyramids',
    categoryLabel: 'Prisms & Pyramids',
    badgeColor: 'bg-[#dcfce7] dark:bg-[#166534]/40 text-[#14532d] dark:text-[#4ade80] border-[#4ade80] dark:border-[#15803d]',
    summary: 'A 3D prism with two parallel triangular bases and three rectangular sides (e.g. Toblerone box, camping tent).',
    formula: 'V = \\frac{1}{2} b h l',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M3 18L10 6L17 18H3Z"/><path d="M10 6L21 9L21 19L17 18"/><path d="M17 18L21 19"/></svg>`,
    inputs: [
      { id: 'base', label: 'Triangle Base', symbol: 'b', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Triangle Height', symbol: 'h', defaultVal: 1.2, defaultUnit: 'm', min: 0 },
      { id: 'length', label: 'Prism Length', symbol: 'l', defaultVal: 3, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Toblerone Bar', description: 'Large chocolate bar pack', values: { base: { val: 4.5, unit: 'cm' }, height: { val: 4, unit: 'cm' }, length: { val: 28, unit: 'cm' } } },
      { name: 'A-Frame Tent', description: '2-person camping shelter', values: { base: { val: 1.8, unit: 'm' }, height: { val: 1.4, unit: 'm' }, length: { val: 2.2, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const b = lengthToMeters(inputs.base.val, inputs.base.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      const l = lengthToMeters(inputs.length.val, inputs.length.unit);
      const volumeM3 = 0.5 * b * h * l;
      return {
        volumeM3,
        formulaDisplay: `V = ½ × b × h × l`,
        steps: [
          { label: 'Triangle Base, Height, and Prism Length', equation: `b = ${b.toFixed(4)} m, h = ${h.toFixed(4)} m, l = ${l.toFixed(4)} m` },
          { label: 'Triangle Base Area', equation: `A_{tri} = ½ × b × h = ½ × ${b.toFixed(4)} × ${h.toFixed(4)} = ${(0.5 * b * h).toFixed(4)} m²` },
          { label: 'Volume calculation', equation: `V = ${(0.5 * b * h).toFixed(4)} × ${l.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 13. HOLLOW CYLINDER / PIPE
  hollow_cylinder: {
    id: 'hollow_cylinder',
    name: 'Hollow Cylinder / Pipe',
    category: 'tanks_pipes',
    categoryLabel: 'Tanks & Pipes',
    badgeColor: 'bg-[#e0f2fe] dark:bg-[#0369a1]/40 text-[#0c4a6e] dark:text-[#7dd3fc] border-[#7dd3fc] dark:border-[#0284c7]',
    summary: 'A tube or pipe with an outer diameter and inner hollow core. Calculates material volume and internal liquid capacity.',
    formula: 'V_{wall} = \\pi (R^2 - r^2) h',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3.5"/><ellipse cx="12" cy="5" rx="5" ry="2"/><path d="M3 5V19C3 20.93 7.03 22.5 12 22.5C16.97 22.5 21 20.93 21 19V5"/><ellipse cx="12" cy="19" rx="5" ry="2"/></svg>`,
    inputs: [
      { id: 'outerRadius', label: 'Outer Radius', symbol: 'R', defaultVal: 0.5, defaultUnit: 'm', min: 0 },
      { id: 'innerRadius', label: 'Inner Radius', symbol: 'r', defaultVal: 0.4, defaultUnit: 'm', min: 0 },
      { id: 'height', label: 'Length / Height', symbol: 'h', defaultVal: 4, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: '4" PVC Drainage Pipe', description: '10ft standard plumbing pipe', values: { outerRadius: { val: 2.25, unit: 'in' }, innerRadius: { val: 2.0, unit: 'in' }, height: { val: 10, unit: 'ft' } } },
      { name: 'Concrete Culvert Pipe', description: 'Highway drainage tube', values: { outerRadius: { val: 75, unit: 'cm' }, innerRadius: { val: 60, unit: 'cm' }, height: { val: 2.5, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const R = lengthToMeters(inputs.outerRadius.val, inputs.outerRadius.unit);
      const r = lengthToMeters(inputs.innerRadius.val, inputs.innerRadius.unit);
      const h = lengthToMeters(inputs.height.val, inputs.height.unit);
      if (r >= R) {
        return {
          volumeM3: 0,
          formulaDisplay: `Error: Inner radius must be smaller than outer radius`,
          steps: [{ label: 'Error', equation: 'Inner radius (r) must be smaller than Outer radius (R)' }],
        };
      }
      const volumeM3 = Math.PI * (R * R - r * r) * h;
      const internalCapacityM3 = Math.PI * r * r * h;
      return {
        volumeM3,
        formulaDisplay: `V = π × (R² - r²) × h`,
        steps: [
          { label: 'Radii and Length in meters', equation: `R = ${R.toFixed(4)} m, r = ${r.toFixed(4)} m, h = ${h.toFixed(4)} m` },
          { label: 'Material Wall Volume', equation: `V_{wall} = π × (${(R*R).toFixed(4)} - ${(r*r).toFixed(4)}) × ${h.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
          { label: 'Internal Hollow Capacity (Fluid Volume)', equation: `V_{fluid} = π × r² × h = ${internalCapacityM3.toFixed(6)} m³ (${(internalCapacityM3 * 1000).toFixed(2)} Liters)` },
        ],
      };
    },
  },

  // 14. TORUS (DONUT)
  torus: {
    id: 'torus',
    name: 'Torus (Donut / O-Ring)',
    category: 'curved',
    categoryLabel: 'Curved Shapes',
    badgeColor: 'bg-[#fce7f3] dark:bg-[#9d174d]/40 text-[#831843] dark:text-[#f472b6] border-[#f472b6] dark:border-[#be185d]',
    summary: 'A ring-shaped surface generated by revolving a circle about an axis coplanar with the circle.',
    formula: 'V = 2 \\pi^2 R r^2',
    surfaceAreaFormula: 'A = 4 \\pi^2 R r',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="12" cy="12" rx="10" ry="7"/><ellipse cx="12" cy="12" rx="4" ry="2.5"/></svg>`,
    inputs: [
      { id: 'majorRadius', label: 'Major Radius (Center to Tube)', symbol: 'R', defaultVal: 1.5, defaultUnit: 'm', min: 0 },
      { id: 'minorRadius', label: 'Minor Radius (Tube Radius)', symbol: 'r', defaultVal: 0.3, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Bakery Glazed Donut', description: 'Classic circular donut', values: { majorRadius: { val: 4, unit: 'cm' }, minorRadius: { val: 1.5, unit: 'cm' } } },
      { name: 'Swimming Pool Inner Tube', description: 'Inflatable river tube', values: { majorRadius: { val: 50, unit: 'cm' }, minorRadius: { val: 18, unit: 'cm' } } },
    ],
    calculate: (inputs) => {
      const R = lengthToMeters(inputs.majorRadius.val, inputs.majorRadius.unit);
      const r = lengthToMeters(inputs.minorRadius.val, inputs.minorRadius.unit);
      if (r > R) {
        return {
          volumeM3: 0,
          formulaDisplay: `Error: Tube radius r cannot exceed major radius R`,
          steps: [{ label: 'Error', equation: 'Minor radius (r) cannot exceed Major radius (R)' }],
        };
      }
      const volumeM3 = 2 * Math.pow(Math.PI, 2) * R * Math.pow(r, 2);
      const surfaceAreaM2 = 4 * Math.pow(Math.PI, 2) * R * r;
      return {
        volumeM3,
        surfaceAreaM2,
        formulaDisplay: `V = 2π² × R × r²`,
        steps: [
          { label: 'Major Radius R and Tube Radius r', equation: `R = ${R.toFixed(4)} m, r = ${r.toFixed(4)} m` },
          { label: 'Volume calculation', equation: `V = 2 × π² × ${R.toFixed(4)} × (${r.toFixed(4)})² = ${volumeM3.toFixed(6)} m³` },
          { label: 'Surface Area', equation: `A = 4 × π² × R × r = ${surfaceAreaM2.toFixed(4)} m²` },
        ],
      };
    },
  },

  // 15. TRAPEZOIDAL PRISM / TROUGH
  trapezoidal_prism: {
    id: 'trapezoidal_prism',
    name: 'Trapezoidal Prism / Trench / Trough',
    category: 'tanks_pipes',
    categoryLabel: 'Tanks & Pipes',
    badgeColor: 'bg-[#ccfbf1] dark:bg-[#115e59]/40 text-[#134e4a] dark:text-[#5eead4] border-[#5eead4] dark:border-[#0f766e]',
    summary: 'A 3D prism whose cross-section is a trapezoid. Ideal for livestock troughs, canal sections, and excavation trenches.',
    formula: 'V = \\frac{a + b}{2} \\times h \\times l',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><path d="M4 6L8 18H16L20 6H4Z"/><path d="M20 6L23 8L19 20H11L8 18"/><path d="M16 18L19 20"/></svg>`,
    inputs: [
      { id: 'topWidth', label: 'Top Width', symbol: 'a', defaultVal: 2, defaultUnit: 'm', min: 0 },
      { id: 'bottomWidth', label: 'Bottom Width', symbol: 'b', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'depth', label: 'Depth / Height', symbol: 'h', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'length', label: 'Trough Length', symbol: 'l', defaultVal: 4, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: 'Livestock Water Trough', description: 'Standard farm cattle trough', values: { topWidth: { val: 60, unit: 'cm' }, bottomWidth: { val: 40, unit: 'cm' }, depth: { val: 45, unit: 'cm' }, length: { val: 200, unit: 'cm' } } },
      { name: 'Drainage Swale', description: 'Roadside earthen ditch', values: { topWidth: { val: 1.8, unit: 'm' }, bottomWidth: { val: 0.6, unit: 'm' }, depth: { val: 0.8, unit: 'm' }, length: { val: 25, unit: 'm' } } },
    ],
    calculate: (inputs) => {
      const a = lengthToMeters(inputs.topWidth.val, inputs.topWidth.unit);
      const b = lengthToMeters(inputs.bottomWidth.val, inputs.bottomWidth.unit);
      const h = lengthToMeters(inputs.depth.val, inputs.depth.unit);
      const l = lengthToMeters(inputs.length.val, inputs.length.unit);
      const crossSectionArea = 0.5 * (a + b) * h;
      const volumeM3 = crossSectionArea * l;
      return {
        volumeM3,
        formulaDisplay: `V = ½(a + b) × h × l`,
        steps: [
          { label: 'Dimensions in meters', equation: `a = ${a.toFixed(4)} m, b = ${b.toFixed(4)} m, h = ${h.toFixed(4)} m, l = ${l.toFixed(4)} m` },
          { label: 'Trapezoidal Cross-Section Area', equation: `A_{cross} = ½ × (${a.toFixed(4)} + ${b.toFixed(4)}) × ${h.toFixed(4)} = ${crossSectionArea.toFixed(4)} m²` },
          { label: 'Volume calculation', equation: `V = ${crossSectionArea.toFixed(4)} × ${l.toFixed(4)} = ${volumeM3.toFixed(6)} m³` },
        ],
      };
    },
  },

  // 16. HORIZONTAL TANK WITH LIQUID FILL LEVEL (COMPETITIVE ADVANTAGE FEATURE)
  horizontal_tank_fill: {
    id: 'horizontal_tank_fill',
    name: 'Horizontal Cylinder Tank (Liquid Fill Depth)',
    category: 'tanks_pipes',
    categoryLabel: 'Tanks & Pipes',
    badgeColor: 'bg-[#f3e8ff] dark:bg-[#581c87]/40 text-[#581c87] dark:text-[#d8b4fe] border-[#d8b4fe] dark:border-[#7e22ce]',
    summary: 'Calculates the exact liquid volume in a horizontal cylindrical tank filled to a specific depth d, along with total capacity and fill percentage.',
    formula: 'V_{fill} = [r^2 \\arccos(\\frac{r-d}{r}) - (r-d)\\sqrt{2rd - d^2}] \\times L',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6"><ellipse cx="7" cy="12" rx="4" ry="8"/><path d="M7 4H17C19.2 4 21 7.58 21 12C21 16.42 19.2 20 17 20H7"/><path d="M3 14H19" stroke-dasharray="2 2"/></svg>`,
    inputs: [
      { id: 'radius', label: 'Tank Radius', symbol: 'r', defaultVal: 1, defaultUnit: 'm', min: 0 },
      { id: 'length', label: 'Tank Length', symbol: 'L', defaultVal: 4, defaultUnit: 'm', min: 0 },
      { id: 'fillDepth', label: 'Liquid Fill Depth (d ≤ 2r)', symbol: 'd', defaultVal: 0.75, defaultUnit: 'm', min: 0 },
    ],
    presets: [
      { name: '1000-Gal Fuel Tank (Half Full)', description: 'Horizontal diesel tank', values: { radius: { val: 2, unit: 'ft' }, length: { val: 10.6, unit: 'ft' }, fillDepth: { val: 2, unit: 'ft' } } },
      { name: '500-Gal Propane Tank (80% Full)', description: 'Above-ground residential tank', values: { radius: { val: 1.5, unit: 'ft' }, length: { val: 9.8, unit: 'ft' }, fillDepth: { val: 2.4, unit: 'ft' } } },
    ],
    calculate: (inputs) => {
      const r = lengthToMeters(inputs.radius.val, inputs.radius.unit);
      const L = lengthToMeters(inputs.length.val, inputs.length.unit);
      const d = lengthToMeters(inputs.fillDepth.val, inputs.fillDepth.unit);
      const totalVolumeM3 = Math.PI * r * r * L;

      if (d <= 0) {
        return {
          volumeM3: 0,
          formulaDisplay: 'Tank is empty (d = 0)',
          steps: [
            { label: 'Total Capacity', equation: `V_{total} = ${totalVolumeM3.toFixed(4)} m³` },
            { label: 'Liquid Fill', equation: 'Depth is 0, so liquid volume is 0 m³' },
          ],
        };
      }

      if (d >= 2 * r) {
        return {
          volumeM3: totalVolumeM3,
          formulaDisplay: 'Tank is 100% full (d ≥ 2r)',
          steps: [
            { label: 'Total Capacity', equation: `V_{total} = ${totalVolumeM3.toFixed(4)} m³` },
            { label: 'Liquid Fill', equation: `Tank is completely filled: V_{fill} = ${totalVolumeM3.toFixed(6)} m³` },
          ],
        };
      }

      // Circular segment area formula:
      // Area = r^2 * arccos((r - d)/r) - (r - d) * sqrt(2*r*d - d^2)
      const segmentArea = (r * r * Math.acos((r - d) / r)) - (r - d) * Math.sqrt(2 * r * d - d * d);
      const filledVolumeM3 = segmentArea * L;
      const fillPercentage = (filledVolumeM3 / totalVolumeM3) * 100;

      return {
        volumeM3: filledVolumeM3,
        formulaDisplay: `V_{fill} = [r² × arccos((r-d)/r) - (r-d)√(2rd - d²)] × L`,
        steps: [
          { label: 'Tank Radius, Length, and Liquid Depth', equation: `r = ${r.toFixed(4)} m, L = ${L.toFixed(4)} m, d = ${d.toFixed(4)} m` },
          { label: 'Total Tank Capacity', equation: `V_{total} = π × r² × L = ${totalVolumeM3.toFixed(6)} m³ (${(totalVolumeM3 * 1000).toFixed(1)} L)` },
          { label: 'Liquid Wet Cross-Section Area', equation: `A_{wet} = ${segmentArea.toFixed(4)} m²` },
          { label: 'Current Liquid Volume', equation: `V_{fill} = ${filledVolumeM3.toFixed(6)} m³ (${(filledVolumeM3 * 1000).toFixed(1)} L)` },
          { label: 'Fill Level', equation: `${fillPercentage.toFixed(1)}% full` },
        ],
      };
    },
  },
};

export const SHAPE_CATEGORIES = [
  { id: 'all', label: 'All Shapes' },
  { id: 'basic', label: 'Basic 3D' },
  { id: 'curved', label: 'Curved' },
  { id: 'prisms_pyramids', label: 'Prisms & Pyramids' },
  { id: 'tanks_pipes', label: 'Tanks & Pipes' },
];
