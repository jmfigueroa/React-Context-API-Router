import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports:{
        './src/CustomRoute.js': ['CustomRoute'],
        './src/Link.js': ['Link'],
        './src/Main.js': ['RoutingProvider', 'RoutingConsumer'],
        './src/ProtectedRoute.js': ['ProtectedRoute'],
        './src/Redirect.js': ['Redirect'],
        './src/Route.js': ['Route']
      }
    })
  ]
}
