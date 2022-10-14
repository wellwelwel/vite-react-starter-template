import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from 'path';

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
   resolve: {
      alias: {
         ['#src']: resolve(__dirname, './src'),
         ['#assets']: resolve(__dirname, './src/assets'),
         ['#helpers']: resolve(__dirname, './helpers'),
         ['#hooks']: resolve(__dirname, './src/hooks'),
         ['#pages']: resolve(__dirname, './src/pages'),
         ['#utils']: resolve(__dirname, './src/utils'),
      },
   },
});
