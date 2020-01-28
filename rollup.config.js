import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import strip from '@rollup/plugin-strip';

import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.ts', '.tsx', '.json'];

export default {
  input: 'src',
  output: [
    {
      file: 'dist/common.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    alias({
      entries: {
        '~': './src',
      },
      resolve: extensions,
    }),
    eslint(),
    typescript({ rollupCommonJSResolveHack: true, clean: true }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions,
    }),
    strip(),
    commonjs(),
    terser(),
  ],
};
