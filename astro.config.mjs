import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dummy change to force Vercel full rebuild (2025-11-29)
  site: 'https://www.kenpham.ca',
  adapter: vercel(),
  integrations: [sitemap()],
  outDir: 'dist2' // Force new output directory for cache busting
});