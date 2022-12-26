// @ts-check

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const input = 'src/backend/server/index.ts';

export default {
   external: ['mysql2/promise', 'ioredis'],
   input,
   plugins: [
      typescript({
         tsconfig: './tsconfig.json',
      }),
      commonjs(),
      json({ compact: true }),
      nodeResolve(),
      strip({
         include: [input],
         labels: ['unittest'],
      }),
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
};
