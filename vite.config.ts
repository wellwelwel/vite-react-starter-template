import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default defineConfig({
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
   css: {
      postcss: {
         plugins: [autoprefixer, cssnano],
      },
   },
   plugins: [
      react(),
      legacy({
         targets: ['> 0%'],
      }),
   ],
   build: {
      outDir: resolve('./dist/frontend/public'),
      minify: 'terser',
      rollupOptions: {
         input: './index.html',
         plugins: [
            commonjs(),
            nodeResolve(),
            babel({
               babelHelpers: 'inline',
               presets: ['@babel/preset-env'],
               comments: false,
               compact: true,
               minified: true,
            }),
            terser({
               compress: true,
               mangle: true,
            }),
         ],
      },
   },
});
