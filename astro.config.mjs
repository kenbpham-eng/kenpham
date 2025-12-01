import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// Cache buster: 2025-12-01 09:53
// https://astro.build/config
export default defineConfig({
  site: 'https://www.kenpham.ca',
  adapter: vercel(),
  integrations: [sitemap()]
});