'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

// preset default output object
const output = {
  library: 'i18n',
  libraryTarget: 'umd',
  libraryExport: 'default',
  path: path.resolve(__dirname, 'dist'),
  filename: 'i18n.min.js',
  globalObject: 'this'
}

// base Webpack config
const config = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output,
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}

module.exports = devMode
  // single config object for dev server
  ? config
  // additional production outputs for each language
  : ['en_us', 'pt_br', null].map(lang => {
    return !lang ? config : {
      ...config,
      entry: path.resolve(__dirname, `src/${lang}/index.js`),
      output: {
        ...output,
        filename: output.filename.replace('.min.js', `.${lang}.min.js`)
      }
    }
  })
