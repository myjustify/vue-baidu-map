const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './components/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './'),
    filename: '../index.js',
    library: 'VueBaiduMap',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
