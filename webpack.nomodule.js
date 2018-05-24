const config = {
  output: {
    filename: 'bundle.nomodule.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              ['env', {
                targets: {
                  browsers: [
                    '> 1%',
                    'last 2 versions',
                    'Firefox ESR'
                  ]
                }
              }]
            ],
            plugins: [['transform-object-rest-spread', {useBuiltIns: true}]]
          }
        }
      }
    ]
  }
}

module.exports = config
