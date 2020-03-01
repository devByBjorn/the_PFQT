const path = require('path')

module.exports = {
  entry: {
    create: './src/js/createQoute.js',
    created: './src/js/createdQoutes.js',
    favorites: './src/js/favoriteQoute.js',
    qoutes: './src/js/qoutes.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,

      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  mode: 'development'
}