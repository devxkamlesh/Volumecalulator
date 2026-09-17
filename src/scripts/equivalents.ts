import { ICONS } from './icons';

export interface VolumeEquivalent {
  id: string;
  name: string;
  iconSvg: string;
  cubicMeters: number;
  description: string;
}

export const REAL_WORLD_ITEMS: VolumeEquivalent[] = [
  {
    id: 'soda_can',
    name: '12 oz Soda Cans',
    iconSvg: ICONS.can,
    cubicMeters: 0.000354882, // 355 ml
    description: 'Standard 355 mL beverage cans',
  },
  {
    id: 'coffee_mug',
    name: 'Coffee Mugs',
    iconSvg: ICONS.mug,
    cubicMeters: 0.00035, // 350 ml
    description: 'Average 12 oz ceramic mugs',
  },
  {
    id: 'milk_jug',
    name: '1-Gallon Milk Jugs',
    iconSvg: ICONS.milk,
    cubicMeters: 0.00378541, // 1 US gal
    description: 'Standard gallon jugs',
  },
  {
    id: 'bathtub',
    name: 'Standard Bathtubs',
    iconSvg: ICONS.bathtub,
    cubicMeters: 0.30, // ~300 L
    description: 'Standard household bathtubs (approx 80 gal)',
  },
  {
    id: 'drum_55',
    name: '55-Gallon Steel Drums',
    iconSvg: ICONS.drum,
    cubicMeters: 0.208198, // 208 L
    description: 'Industrial 55-gallon oil/chemical drums',
  },
  {
    id: 'hot_tub',
    name: 'Family Hot Tubs',
    iconSvg: ICONS.hottub,
    cubicMeters: 1.5, // 1500 L
    description: '4-person outdoor residential spa',
  },
  {
    id: 'shipping_container',
    name: '20ft Shipping Containers',
    iconSvg: ICONS.container,
    cubicMeters: 33.2,
    description: 'Standard 20-foot ISO intermodal freight container',
  },
  {
    id: 'olympic_pool',
    name: 'Olympic Swimming Pools',
    iconSvg: ICONS.pool,
    cubicMeters: 2500, // 2.5 million liters
    description: '50m × 25m × 2m Olympic competition pools',
  },
];

export interface EquivalentMatch {
  name: string;
  iconSvg: string;
  count: number;
  formattedCount: string;
  description: string;
}

/**
 * Returns relevant real-world equivalents for a given volume in m³
 */
export function getVolumeEquivalents(volumeM3: number): EquivalentMatch[] {
  if (volumeM3 <= 0 || isNaN(volumeM3)) return [];

  // Sort and select top 3 most relevant items based on scale
  const matches: EquivalentMatch[] = [];

  for (const item of REAL_WORLD_ITEMS) {
    const ratio = volumeM3 / item.cubicMeters;
    if (ratio >= 0.05 && ratio <= 5000000) {
      let formattedCount: string;
      if (ratio >= 1000) {
        formattedCount = Math.round(ratio).toLocaleString('en-US');
      } else if (ratio >= 10) {
        formattedCount = (Math.round(ratio * 10) / 10).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      } else if (ratio >= 1) {
        formattedCount = (Math.round(ratio * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } else {
        formattedCount = (Math.round(ratio * 1000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
      }

      matches.push({
        name: item.name,
        iconSvg: item.iconSvg,
        count: ratio,
        formattedCount,
        description: item.description,
      });
    }
  }

  // Pick the 3 closest to 1.0 ratio
  matches.sort((a, b) => Math.abs(Math.log10(a.count)) - Math.abs(Math.log10(b.count)));
  return matches.slice(0, 3);
}
