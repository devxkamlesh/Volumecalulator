// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thevolumecalculator.com',
  i18n: {
    locales: ['en', 'es', 'pt', 'de', 'fr', 'ru', 'ja', 'zh', 'it', 'ar', 'hi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/all-calculators') &&
        !page.includes('/rectangular-prism-volume-calculator') &&
        !page.includes('/hollow-cylinder-volume-calculator') &&
        !page.endsWith('/about') &&
        !page.endsWith('/contact') &&
        !page.endsWith('/privacy') &&
        !page.endsWith('/terms') &&
        !page.includes('/404') &&
        !page.includes('/500'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
