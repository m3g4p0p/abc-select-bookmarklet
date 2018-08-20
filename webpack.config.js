const CleanWebpackPlugin = require('clean-webpack-plugin')
const BookmarkletPlugin = require('bookmarklet-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new BookmarkletPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
}
