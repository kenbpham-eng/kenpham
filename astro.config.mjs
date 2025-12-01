import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// Cache buster: 2025-12-01 09:58
// https://astro.build/config
export default defineConfig({
  site: 'https://www.kenpham.ca',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()]
});