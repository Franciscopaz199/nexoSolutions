// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://franciscopaz199.github.io',
  base: '/nexoSolutions', // muy importante este slash
  outDir: './dist', // carpeta de salida
  build: {
    format: 'directory', // más compatible para GH Pages
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});