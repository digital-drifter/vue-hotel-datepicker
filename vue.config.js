const path = require('path')
const fs = require('fs')

if (fs.hasOwnProperty('inotify')) {
  fs.inotify.max_user_watches = 524288
}

const CompressionPlugin = require('compression-webpack-plugin')

// use https & http/2?
const https = process.env.DEV_SERVER_HTTPS !== 'true' ? false : {
  key: fs.readFileSync(process.env.DEV_SERVER_SSL_KEY),
  cert: fs.readFileSync(process.env.DEV_SERVER_SSL_CRT),
  ca: fs.readFileSync(process.env.DEV_SERVER_SSL_CA)
}

// use proxy?
const proxy = process.env.DEV_SERVER_PROXY !== 'true' ? false : {
  [process.env.DEV_SERVER_PROXY_NAME]: {
    target: process.env.DEV_SERVER_PROXY_TARGET,
    ws: process.env.DEV_SERVER_PROXY_WS === 'true',
    changeOrigin: process.env.DEV_SERVER_PROXY_CHANGE_ORIGIN === 'true'
  }
}

const devServer = {
  compress: process.env.DEV_SERVER_COMPRESS === 'true',
  host: process.env.DEV_SERVER_HOST || '0.0.0.0',
  hot: process.env.DEV_SERVER_HOT === 'true',
  https,
  port: process.env.DEV_SERVER_PORT || 9000,
  proxy
}

module.exports = {
  chainWebpack: config => {
    const inlineLimit = 500000

    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: path.join('fonts/[name].[hash].[ext]'),
        mimetype: "application/font-woff"
      })
  },
  configureWebpack: {
    devtool: 'cheap-eval-source-map',
    output: {
      filename: 'vue-block-dates.js',
      libraryTarget: 'umd'
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        cache: false,
        minRatio: 0.8,
        threshold: 0,
        test: [
          /\.js$/,
          /\.css$/
        ]
      })
    ],
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        '@/*': './src/*',
        vue$: 'vue/dist/vue.esm'
      },
      extensions: ['*', '.js', '.json', '.vue', '.ts']
    },
  },
  productionSourceMap: true,
  devServer
}
