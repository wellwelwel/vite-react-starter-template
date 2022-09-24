import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
   plugins: [
      react(),
      legacy({
         targets: ['> 0%'],
      }),
   ],
   css: {
      postcss: {
         plugins: [autoprefixer, cssnano],
      },
   },
});
