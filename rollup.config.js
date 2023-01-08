// @ts-check

import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const input = 'src/backend/server/index.ts';

export default defineConfig({
   external: ['mysql2/promise', 'ioredis'],
   input,
   plugins: [
      typescript({
         tsconfig: './tsconfig.json',
      }),
      commonjs(),
      json({ compact: true }),
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
   output: {
      file: './docker/app/dist/backend/server/index.js',
      format: 'es',
      inlineDynamicImports: true,
   },
});
