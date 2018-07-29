import commonjs from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import tsconfig from '../tsconfig.json'
const replace = require('rollup-plugin-replace')

export default {
  input: 'src/main.ts',
  output: {
    name: 'vue-hotel-datepicker.js',
    file: 'dist/vue-hotel-datepicker.js',
    format: 'umd',
    globals: {
      'axios': 'Axios'
    }
  },
  plugins: [
    node({
      extensions: ['.js', '.jsx', '.ts', '.vue']
    }),
    vue({
      disableCssModuleStaticReplacement: false,
      compileTemplate: true,
      typescript: tsconfig
    }),
    typescript(),
    commonjs(),
    autoExternal(),
    terser(),
    replace({
      'process.env.NODE_ENV': 'development'
    })
  ]
}
