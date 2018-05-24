const config = {
  output: {
    filename: 'bundle.module.js'
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
              [
                'env',
                {
                  targets: {browsers: ['last 2 Chrome versions', 'Safari 10']},
                  debug: true
                }
              ]
            ],
            plugins: [['transform-object-rest-spread', {useBuiltIns: true}]]
          }
        }
      }
    ]
  }
}

module.exports = config
