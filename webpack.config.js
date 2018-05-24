const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = (env = {}) => merge(common(env), {
})

module.exports = config
