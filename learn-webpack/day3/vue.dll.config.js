// 专门为打包vue全家桶服务的
let path = require('path')
let webpack = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    vue_all: ['vue', 'vuex']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}