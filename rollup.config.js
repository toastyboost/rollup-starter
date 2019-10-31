import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import cleaner from 'rollup-plugin-cleaner'
import alias from '@rollup/plugin-alias'

import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/common.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    cleaner({
      targets: ['dist']
    }),
    alias({
      entries: {
        components: './components'
      },
      resolve: ['.jsx', '.js']
    }),
    eslint(),
    babel({
      exclude: ['node_modules/**']
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json']
    }),
    commonjs(),
    production && terser()
  ]
}
