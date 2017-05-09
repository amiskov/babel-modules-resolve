var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.babel.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    // говорим, где искать модули, чтоб писать require('menu') вместо require('./menu')
    // http://webpack.github.io/docs/configuration.html#resolve-root
    root: path.resolve('./'),
    
    // works for webpack@1.x
    // http://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: ['', '.js', '.json', '.babel.js'] 
  }
};