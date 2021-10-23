let path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HTMLWP = require('html-webpack-plugin')
let webpack = require('webpack');
module.exports = {
  mode: 'production',
  entry: './src/1.js',// 把 src下的 1.js 作为我们的入口文件
  output: {
    filename: "qqq2.[fullhash:6].js",// 指定了生成的文件的名字
    path: path.resolve(__dirname, '../dist')   // 必须是一个绝对路径
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWP({
      template: './public123/index.html',
      title123: "珠峰培训",
      filename: 'qq.html',
      hash: true
    }),
    new webpack.DefinePlugin({
      //  编译阶段的犬奴常量
      baseUrl: '1+2+3',
      baseUrl2: '"123"',
      obj: {
        qqq: 666
      }
    })
  ]
}