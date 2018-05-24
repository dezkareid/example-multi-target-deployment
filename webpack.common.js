const HtmlWebPackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const moduleConf = require('./webpack.module')
const nomoduleConf = require('./webpack.nomodule')

const config = {
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html',
      inject: false
    })
  ]
}

module.exports = (env) => merge(config, env.BROWSERS === 'module' ? moduleConf : nomoduleConf)
