import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import strip from '@rollup/plugin-strip';

import typescript from 'rollup-plugin-typescript2';

import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const availibleFiles = ['.ts', '.tsx', '.json'];

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
      resolve: availibleFiles,
    }),
    eslint(),
    typescript({ rollupCommonJSResolveHack: true, clean: true }),
    resolve({
      extensions: availibleFiles,
    }),
    strip(),
    commonjs(),
    terser(),
  ],
};
