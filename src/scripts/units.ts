export interface LengthUnit {
  id: string;
  name: string;
  symbol: string;
  toMeters: number;
}

export interface VolumeUnit {
  id: string;
  name: string;
  symbol: string;
  toCubicMeters: number; // 1 unit in m^3
  category: 'metric' | 'imperial' | 'cooking';
}

export const LENGTH_UNITS: Record<string, LengthUnit> = {
  m: { id: 'm', name: 'Meters', symbol: 'm', toMeters: 1 },
  cm: { id: 'cm', name: 'Centimeters', symbol: 'cm', toMeters: 0.01 },
  mm: { id: 'mm', name: 'Millimeters', symbol: 'mm', toMeters: 0.001 },
  km: { id: 'km', name: 'Kilometers', symbol: 'km', toMeters: 1000 },
  in: { id: 'in', name: 'Inches', symbol: 'in', toMeters: 0.0254 },
  ft: { id: 'ft', name: 'Feet', symbol: 'ft', toMeters: 0.3048 },
  yd: { id: 'yd', name: 'Yards', symbol: 'yd', toMeters: 0.9144 },
  mi: { id: 'mi', name: 'Miles', symbol: 'mi', toMeters: 1609.344 },
};

export const VOLUME_UNITS: Record<string, VolumeUnit> = {
  m3: { id: 'm3', name: 'Cubic Meters', symbol: 'm³', toCubicMeters: 1, category: 'metric' },
  L: { id: 'L', name: 'Liters', symbol: 'L', toCubicMeters: 0.001, category: 'metric' },
  mL: { id: 'mL', name: 'Milliliters', symbol: 'mL', toCubicMeters: 0.000001, category: 'metric' },
  cm3: { id: 'cm3', name: 'Cubic Centimeters', symbol: 'cm³', toCubicMeters: 0.000001, category: 'metric' },
  mm3: { id: 'mm3', name: 'Cubic Millimeters', symbol: 'mm³', toCubicMeters: 1e-9, category: 'metric' },
  ft3: { id: 'ft3', name: 'Cubic Feet', symbol: 'cu ft (ft³)', toCubicMeters: 0.028316846592, category: 'imperial' },
  in3: { id: 'in3', name: 'Cubic Inches', symbol: 'cu in (in³)', toCubicMeters: 0.000016387064, category: 'imperial' },
  yd3: { id: 'yd3', name: 'Cubic Yards', symbol: 'cu yd (yd³)', toCubicMeters: 0.764554857984, category: 'imperial' },
  gal: { id: 'gal', name: 'US Gallons', symbol: 'US gal', toCubicMeters: 0.003785411784, category: 'imperial' },
  uk_gal: { id: 'uk_gal', name: 'UK Gallons (Imperial)', symbol: 'UK gal', toCubicMeters: 0.00454609, category: 'imperial' },
  fl_oz: { id: 'fl_oz', name: 'US Fluid Ounces', symbol: 'fl oz', toCubicMeters: 0.0000295735295625, category: 'cooking' },
  cup: { id: 'cup', name: 'US Cups', symbol: 'cups', toCubicMeters: 0.0002365882365, category: 'cooking' },
  qt: { id: 'qt', name: 'US Quarts', symbol: 'qt', toCubicMeters: 0.000946352946, category: 'imperial' },
  pt: { id: 'pt', name: 'US Pints', symbol: 'pt', toCubicMeters: 0.000473176473, category: 'imperial' },
  bbl: { id: 'bbl', name: 'Oil Barrels (42 gal)', symbol: 'bbl', toCubicMeters: 0.158987294928, category: 'imperial' },
};

/**
 * Converts length value from given length unit to meters
 */
export function lengthToMeters(val: number, unitId: string): number {
  const unit = LENGTH_UNITS[unitId] || LENGTH_UNITS.m;
  return val * unit.toMeters;
}

/**
 * Converts volume in cubic meters to specified volume unit
 */
export function fromCubicMeters(m3Val: number, unitId: string): number {
  const unit = VOLUME_UNITS[unitId] || VOLUME_UNITS.m3;
  return m3Val / unit.toCubicMeters;
}

/**
 * Formats a number with smart precision and thousands separators
 */
export function formatNumber(val: number, precision = 4): string {
  if (val === 0) return '0';
  if (isNaN(val) || !isFinite(val)) return '—';

  const abs = Math.abs(val);
  if (abs < 0.00001 || abs >= 1e9) {
    return val.toExponential(4).replace('e+', 'e');
  }

  // Choose appropriate decimal places
  let decimals = precision;
  if (abs >= 1000) decimals = 2;
  else if (abs >= 10) decimals = 3;
  else if (abs >= 1) decimals = 4;
  else decimals = 5;

  const rounded = Number(val.toFixed(decimals));
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
  }).format(rounded);
}
