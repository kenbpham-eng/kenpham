import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Force Vercel full rebuild to clear cache (2025-11-29)
  site: 'https://www.kenpham.ca',
  adapter: vercel(),
  integrations: [sitemap()],
  outDir: 'dist3' // Force new output directory for cache busting
});