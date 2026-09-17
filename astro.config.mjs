// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thevolumecalculator.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/all-calculators') &&
        !page.includes('/rectangular-prism-volume-calculator') &&
        !page.includes('/hollow-cylinder-volume-calculator'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
