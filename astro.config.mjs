// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://chesslol.com',
  base: process.env.BASE_PATH || '/',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
