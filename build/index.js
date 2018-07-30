import path from 'path'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import alias from 'rollup-plugin-alias'
import postcss from 'rollup-plugin-postcss'
import globals from 'rollup-plugin-node-globals'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import autoprefixer from 'autoprefixer'
import { rollup } from 'rollup'
import chalk from 'chalk'

const version = require('../package.json').version
const banner =
        '/*!\n' +
        ' * vue-hotel-datepicker v' + version + '\n' +
        ' * (c) 2018-' + new Date().getFullYear() + ' Brian Lee\n' +
        ' * Released under the MIT License.\n' +
        ' */'

const configs = {
  umd: {
    output: 'vue-hotel-datepicker.js',
    format: 'umd'
  },
  umdMin: {
    output: 'vue-hotel-datepicker.min.js',
    format: 'umd',
    plugins: [terser()]
  },
  cjs: {
    output: 'vue-hotel-datepicker.common.js',
    format: 'cjs'
  },
  esm: {
    output: 'vue-hotel-datepicker.esm.js',
    format: 'es'
  }
}

async function build () {
  Object.keys(configs).forEach(async function (key) {
    const config = configs[key]
    console.log(chalk.cyan(`Building ${key}: ${config.output}`))
    const inputOptions = {
      input: path.join(__dirname, '..', 'src', 'components', 'VueHotelDatePicker.vue'),
      external: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        'bootstrap',
        'vue-property-decorator'
      ],
      plugins: [
        vue({
          css: true
        }),
        alias({
          '@': './src/',
          vue$: 'vue/dist/vue.esm',
          resolve: ['.js', '.ts', '.vue']
        }),
        globals(),
        autoExternal(),
        typescript({
          typescript: require("typescript"),
          cacheRoot: path.resolve(`/tmp/.cache_${key}_${process.pid}`)
        }),
        postcss({
          plugins: [
            autoprefixer()
          ]
        }),
        buble({
          objectAssign: 'Object.assign'
        })
      ].concat(config.plugins || [])
    }
    const bundle = await rollup(inputOptions)
    const outputOptions = {
      file: path.join(__dirname, '..', 'dist', config.output),
      format: config.format,
      banner: banner,
      name: 'vueHotelDatePicker',
      globals: {
        'vue-property-decorator': 'vue-property-decorator'
      }
    }
    await bundle.write(outputOptions)
  })
  await console.log(chalk.green('All modules built'))
}

build()
  .catch(error => {
    console.log(chalk.red('Module build failed.'))
    console.log(chalk.red(error.message))
  })
