import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'
import globals from 'rollup-plugin-node-globals'
import cleaner from 'rollup-plugin-cleaner'

import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
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
  external: ['react', 'styled-components', 'react-dom'],
  plugins: [
    cleaner({
      targets: ['dist', 'typings']
    }),
    typescript(),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'createElement',
          'Fragment',
          'cloneElement',
          'createFactory',
          'createRef',
          'createContext',
          'useState',
          'useContext',
          'useMemo',
          'useDebugValue',
          'useEffect',
          'useReducer',
          'useLayoutEffect'
        ],
        'node_modules/styled-components/index.js': ['css'],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef']
      }
    }),
    babel({
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-styled-components'
      ],
      exclude: 'node_modules/**'
    }),
    globals(),
    terser()
  ]
}
