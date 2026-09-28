import { describe, expect, it } from 'vitest';
import { getShapeSvg } from './diagrams';
import { SHAPES } from './shapes';
import { TOOL_DETAILS } from './tool-details';
import { formatNumber, fromCubicMeters, lengthToMeters } from './units';
import { HOME_ALTERNATES, LOCALE_CODES, LOCALIZED_HOMES } from '../i18n/home-locales';
import { LOCALIZED_FAQS } from '../i18n/localized-faqs';

describe('unit conversion and formatting', () => {
  it('converts exact standard units', () => {
    expect(lengthToMeters(1, 'ft')).toBeCloseTo(0.3048, 12);
    expect(fromCubicMeters(1, 'L')).toBeCloseTo(1000, 12);
    expect(fromCubicMeters(1, 'gal')).toBeCloseTo(264.172052, 5);
  });

  it('honors requested display precision', () => {
    expect(formatNumber(12.34567, 2)).toBe('12.35');
    expect(formatNumber(0.123456, 3)).toBe('0.123');
  });
});

describe('shape calculations', () => {
  it('calculates a mixed-unit rectangular prism', () => {
    const result = SHAPES.rectangular_prism.calculate({
      length: { val: 1, unit: 'm' },
      width: { val: 100, unit: 'cm' },
      height: { val: 1000, unit: 'mm' },
    });
    expect(result.error).toBeUndefined();
    expect(result.volumeM3).toBeCloseTo(1, 12);
  });

  it('returns structured geometry errors', () => {
    const pipe = SHAPES.hollow_cylinder.calculate({
      outerRadius: { val: 1, unit: 'm' },
      innerRadius: { val: 1, unit: 'm' },
      height: { val: 2, unit: 'm' },
    });
    const torus = SHAPES.torus.calculate({
      majorRadius: { val: 1, unit: 'm' },
      minorRadius: { val: 2, unit: 'm' },
    });
    expect(pipe.error?.code).toBe('invalid_relation');
    expect(torus.error?.fieldIds).toContain('minorRadius');
  });

  it('handles horizontal tank boundaries', () => {
    const empty = SHAPES.horizontal_tank_fill.calculate({
      radius: { val: 1, unit: 'm' },
      length: { val: 2, unit: 'm' },
      fillDepth: { val: 0, unit: 'm' },
    });
    const half = SHAPES.horizontal_tank_fill.calculate({
      radius: { val: 1, unit: 'm' },
      length: { val: 2, unit: 'm' },
      fillDepth: { val: 1, unit: 'm' },
    });
    const overfilled = SHAPES.horizontal_tank_fill.calculate({
      radius: { val: 1, unit: 'm' },
      length: { val: 2, unit: 'm' },
      fillDepth: { val: 2.1, unit: 'm' },
    });
    expect(empty.volumeM3).toBe(0);
    expect(half.volumeM3).toBeCloseTo(Math.PI, 12);
    expect(overfilled.error?.code).toBe('out_of_range');
  });
});

describe('content registry integrity', () => {
  it('provides dedicated diagrams for every shape', () => {
    for (const shapeId of Object.keys(SHAPES)) {
      expect(getShapeSvg(shapeId)).not.toContain('points="50,110 110,140 170,105 100,75"');
    }
  });

  it('uses readable formulas and valid related links', () => {
    for (const detail of Object.values(TOOL_DETAILS)) {
      expect(detail.formulaHtml).not.toMatch(/\\(pi|frac|times|sqrt)/);
      expect(new Set(detail.relatedSlugs).size).toBe(detail.relatedSlugs.length);
      expect(detail.relatedSlugs).not.toContain(detail.slug);
      for (const slug of detail.relatedSlugs) expect(TOOL_DETAILS[slug]).toBeDefined();
    }
  });
});

describe('localized home SEO integrity', () => {
  it('defines ten complete localized landing pages', () => {
    expect(LOCALE_CODES).toHaveLength(10);
    for (const code of LOCALE_CODES) {
      const locale = LOCALIZED_HOMES[code];
      const isCompactScript = locale.lang.startsWith('ja') || locale.lang.startsWith('zh');
      expect(locale.title.length).toBeGreaterThan(isCompactScript ? 12 : 20);
      const minimumDescriptionLength = isCompactScript ? 40 : 60;
      expect(locale.description.length).toBeGreaterThan(minimumDescriptionLength);
      expect(locale.keywords.split(',').length).toBeGreaterThanOrEqual(5);
      expect(locale.sections.length).toBeGreaterThanOrEqual(2);
      expect(locale.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('provides reciprocal self references and x-default', () => {
    expect(HOME_ALTERNATES).toHaveLength(12);
    expect(HOME_ALTERNATES.at(-1)).toEqual({ hreflang: 'x-default', href: 'https://thevolumecalculator.com/' });
    for (const code of LOCALE_CODES) {
      expect(HOME_ALTERNATES).toContainEqual({
        hreflang: LOCALIZED_HOMES[code].lang,
        href: `https://thevolumecalculator.com/${code}/`,
      });
    }
    expect(LOCALIZED_HOMES.ar.dir).toBe('rtl');
  });

  it('provides five unique high-intent FAQs per locale', () => {
    for (const code of LOCALE_CODES) {
      const faqs = LOCALIZED_FAQS[code];
      expect(faqs).toHaveLength(5);
      expect(new Set(faqs.map((faq) => faq.question)).size).toBe(5);
      for (const faq of faqs) {
        expect(faq.question.length).toBeGreaterThan(8);
        expect(faq.answer.length).toBeGreaterThan(40);
      }
    }
  });

  it('validates all 16 Spanish tools against requirements and guides', async () => {
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const toolEntries = Object.entries(SPANISH_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(5);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedSpanishSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedSpanishSlugs) {
        expect(SPANISH_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 German tools against requirements and guides', async () => {
    const { GERMAN_TOOLS } = await import('../i18n/german-tools');
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const toolEntries = Object.entries(GERMAN_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SPANISH_TOOLS[tool.spanishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedGermanSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedGermanSlugs) {
        expect(GERMAN_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 French tools against requirements and guides', async () => {
    const { FRENCH_TOOLS } = await import('../i18n/french-tools');
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const { GERMAN_TOOLS } = await import('../i18n/german-tools');
    const toolEntries = Object.entries(FRENCH_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SPANISH_TOOLS[tool.spanishSlug]).toBeDefined();
      expect(GERMAN_TOOLS[tool.germanSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedFrenchSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedFrenchSlugs) {
        expect(FRENCH_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Portuguese tools against requirements and guides', async () => {
    const { PORTUGUESE_TOOLS } = await import('../i18n/portuguese-tools');
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const { GERMAN_TOOLS } = await import('../i18n/german-tools');
    const { FRENCH_TOOLS } = await import('../i18n/french-tools');
    const toolEntries = Object.entries(PORTUGUESE_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SPANISH_TOOLS[tool.spanishSlug]).toBeDefined();
      expect(GERMAN_TOOLS[tool.germanSlug]).toBeDefined();
      expect(FRENCH_TOOLS[tool.frenchSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedPortugueseSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedPortugueseSlugs) {
        expect(PORTUGUESE_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Italian tools against requirements and guides', async () => {
    const { ITALIAN_TOOLS } = await import('../i18n/italian-tools');
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const { GERMAN_TOOLS } = await import('../i18n/german-tools');
    const { FRENCH_TOOLS } = await import('../i18n/french-tools');
    const { PORTUGUESE_TOOLS } = await import('../i18n/portuguese-tools');
    const toolEntries = Object.entries(ITALIAN_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SPANISH_TOOLS[tool.spanishSlug]).toBeDefined();
      expect(GERMAN_TOOLS[tool.germanSlug]).toBeDefined();
      expect(FRENCH_TOOLS[tool.frenchSlug]).toBeDefined();
      expect(PORTUGUESE_TOOLS[tool.portugueseSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedItalianSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedItalianSlugs) {
        expect(ITALIAN_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Russian tools against requirements and guides', async () => {
    const { RUSSIAN_TOOLS } = await import('../i18n/russian-tools');
    const { SPANISH_TOOLS } = await import('../i18n/spanish-tools');
    const { GERMAN_TOOLS } = await import('../i18n/german-tools');
    const { FRENCH_TOOLS } = await import('../i18n/french-tools');
    const { PORTUGUESE_TOOLS } = await import('../i18n/portuguese-tools');
    const { ITALIAN_TOOLS } = await import('../i18n/italian-tools');
    const toolEntries = Object.entries(RUSSIAN_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SPANISH_TOOLS[tool.spanishSlug]).toBeDefined();
      expect(GERMAN_TOOLS[tool.germanSlug]).toBeDefined();
      expect(FRENCH_TOOLS[tool.frenchSlug]).toBeDefined();
      expect(PORTUGUESE_TOOLS[tool.portugueseSlug]).toBeDefined();
      expect(ITALIAN_TOOLS[tool.italianSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(15);

      expect(tool.h1.length).toBeGreaterThan(15);
      expect(tool.metaDescription.length).toBeGreaterThan(60);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedRussianSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedRussianSlugs) {
        expect(RUSSIAN_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Japanese tools against requirements and guides', async () => {
    const { JAPANESE_TOOLS } = await import('../i18n/japanese-tools');
    const toolEntries = Object.entries(JAPANESE_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(5);

      expect(tool.h1.length).toBeGreaterThan(5);
      expect(tool.metaDescription.length).toBeGreaterThan(30);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(5);
        expect(faq.answer.length).toBeGreaterThan(10);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedJapaneseSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedJapaneseSlugs) {
        expect(JAPANESE_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Chinese tools against requirements and guides', async () => {
    const { CHINESE_TOOLS } = await import('../i18n/chinese-tools');
    const toolEntries = Object.entries(CHINESE_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(5);

      expect(tool.h1.length).toBeGreaterThan(5);
      expect(tool.metaDescription.length).toBeGreaterThan(30);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(4);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(5);
        expect(faq.answer.length).toBeGreaterThan(10);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedChineseSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedChineseSlugs) {
        expect(CHINESE_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Arabic tools against requirements and guides', async () => {
    const { ARABIC_TOOLS } = await import('../i18n/arabic-tools');
    const toolEntries = Object.entries(ARABIC_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(5);

      expect(tool.h1.length).toBeGreaterThan(5);
      expect(tool.metaDescription.length).toBeGreaterThan(30);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(2);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(5);
        expect(faq.answer.length).toBeGreaterThan(10);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedArabicSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedArabicSlugs) {
        expect(ARABIC_TOOLS[related]).toBeDefined();
      }
    }
  });

  it('validates all 16 Hindi tools against requirements and guides', async () => {
    const { HINDI_TOOLS } = await import('../i18n/hindi-tools');
    const toolEntries = Object.entries(HINDI_TOOLS);
    expect(toolEntries).toHaveLength(16);

    for (const [key, tool] of toolEntries) {
      expect(tool.slug).toBe(key);
      expect(TOOL_DETAILS[tool.englishSlug]).toBeDefined();
      expect(SHAPES[tool.shapeId as keyof typeof SHAPES]).toBeDefined();

      // Title length must remain under 35 characters per all-tools-title-guide.md
      expect(tool.title.length).toBeLessThanOrEqual(35);
      expect(tool.title.length).toBeGreaterThan(5);

      expect(tool.h1.length).toBeGreaterThan(5);
      expect(tool.metaDescription.length).toBeGreaterThan(30);
      expect(tool.keywords.split(',').length).toBeGreaterThanOrEqual(2);

      expect(tool.faqs).toHaveLength(3);
      for (const faq of tool.faqs) {
        expect(faq.question.length).toBeGreaterThan(5);
        expect(faq.answer.length).toBeGreaterThan(10);
        expect(faq.question).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
        expect(faq.answer).not.toMatch(/[\u2013\u2014\u2018\u2019\u201c\u201d]/);
      }

      expect(tool.howToCalculate.length).toBeGreaterThanOrEqual(3);
      expect(tool.practicalExamples.length).toBeGreaterThanOrEqual(2);
      expect(tool.relatedHindiSlugs.length).toBeGreaterThanOrEqual(3);
      for (const related of tool.relatedHindiSlugs) {
        expect(HINDI_TOOLS[related]).toBeDefined();
      }
    }
  });
});


