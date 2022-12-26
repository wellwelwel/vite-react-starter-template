import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from 'path';

export default defineConfig({
   build: {
      outDir: resolve('./dist/frontend/public'),
   },
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
         ['#public']: resolve(__dirname, './src/frontend/public'),
         ['#assets']: resolve(__dirname, './src/frontend/public/assets'),
         ['#helpers']: resolve(__dirname, './src/helpers'),
         ['#hooks']: resolve(__dirname, './src/frontend/public/hooks'),
         ['#pages']: resolve(__dirname, './src/frontend/public/pages'),
         ['#utils']: resolve(__dirname, './src/frontend/public/utils'),
      },
   },
});
