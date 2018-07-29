import commonjs from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import tsconfig from '../tsconfig.json'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/vue-hotel-datepicker.common.js',
    format: 'cjs'
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
    terser()
  ]
}
