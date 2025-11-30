import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// Cache buster: 2025-11-29 21:15
// https://astro.build/config
export default defineConfig({
  site: 'https://www.kenpham.ca',
  adapter: vercel(),
  integrations: [sitemap()]
});