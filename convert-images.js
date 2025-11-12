#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/portfolio/halfwaybroken');
const outputDir = inputDir;

// Get all JPG files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));

(async () => {
  console.log(`Converting ${files.length} images to WebP...`);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.jpg', '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✓ ${file} → ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`✗ Error converting ${file}:`, err.message);
    }
  }
  
  console.log('Done!');
})();
