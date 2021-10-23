let path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HTMLWP = require('html-webpack-plugin')
let webpack = require('webpack');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
let Myplugin = require('../my/myplugin.js')
module.exports = {
  entry: './src/index.js',// 把 src下的 1.js 作为我们的入口文件
  output: {
    filename: "qqq2.[fullhash:6].js",// 指定了生成的文件的名字
    path: path.resolve(__dirname, '../dist'),   // 必须是一个绝对路径
    assetModuleFilename: 'imgs/[name][ext]'
  },
  plugins: [
    new Myplugin({
      q: 1, w: 2, e: 3
    }),
    new CleanWebpackPlugin(),
    new HTMLWP({
      template: './public123/index.html',
      title123: "珠峰培训",
      // filename: 'qq.html',
      hash: true
    }),
    new webpack.DefinePlugin({
      //  编译阶段的全局常量
      baseUrl: '1+2+3',
      baseUrl2: '"123"',
      obj: {
        qqq: 666
      }
    }),
    new MiniCssExtractPlugin({
      // filename: 'css/index.css'
      filename: 'index.css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public123'), to: path.resolve(__dirname, '../dist'), filter(path) {
            return !(/\.html/.test(path))
          }
        }
      ]
    })
  ],
  module: {
    /* 
      loader的加载顺序  是从下往上  从右往左
    */
    rules: [
      {
        test: /\.css$/i,// 匹配到css结尾的模块  使用 对应loader解析
        // use: ['style-loader', 'css-loader', 'postcss-loader'] // use除了可以写字符串 还可以使用数组 或者对象
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                ],
              ],
            },
          }
        }], // use除了可以写字符串 还可以使用数组 或者对象
        // exclude: /node_modules/
      },
      // {
      //   test: /\.css$/i,// 匹配到css结尾的模块  使用 对应loader解析
      //   use: 'css-loader'
      // }
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|png|jpeg)$/i,
        type: 'asset/resource'
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       // limit: 50 * 1024,// 资源大小不超过50kb的时候  转成base64的编码格式
        //       limit: 5 * 1024,
        //       name: 'imgs/[name].[ext]'
        //     }
        //   }
        // ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'myloader'
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', './my'],
  }
}
