let html = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')
let path = require('path')
let pageList = ['index', 'other']
let entryObj = {}
pageList.forEach(item => {
  entryObj[item] = `./src/${item}.js`
})
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // entry: {
  //   // a: './src/index.js',
  //   // b: './src/other.js',
  //   ...entryObj,
  //   c: './src/common.js'
  // },
  output: {
    filename: '[name].[fullhash:8].js',// [name] 对应的就是入口的各个属性名
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist/manifest.json')
    }),
    new html({
      template: './public/index.html',
      filename: 'index.html',
      // chunks: ['a', 'c']
    }),
    // new html({
    //   template: './public/other.html',
    //   filename: 'other.html',
    //   chunks: ['b', 'c'] ,// 指定当前的html 引入哪个出口文件
    // }),
    // ...pageList.map(item => {
    //   return new html({
    //     template: `./public/${item}.html`,
    //     filename: `${item}.html`,
    //     chunks: ['c', item],
    //     minify: true
    //   })
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!vue_all*',
        '!manifest.json',
      ]
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $$: 'jquery'
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,// 忽略掉  locale下的资源
      contextRegExp: /moment$/, // 当我们应用moment这个包的时候
    })
  ],
  module: {
    noParse: /loadash|jquery/,
    rules: [
      {
        test: /\.css$/i,
        // use: ["thread-loader", MiniCssExtractPlugin.loader, 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/i,
        // use: ["thread-loader", 'babel-loader'],
        use: ['babel-loader'],
        exclude: /node_modules/ // 为了性能  一般不会处理node_modules中的js文件
      }
    ]
  },
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        jqqq: {
          filename: 'myjq.js',
          test: /jquery|mement/,
          chunks: 'initial'
        }
      }
    }
  },
  // devtool: 'source-map' // 生产环境使用
  // devtool: 'eval-cheap-module-source-map' // 开发环境使用
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'u': path.resolve(__dirname, 'src/util')
    },
    extensions: ['.js', '.vue', '.jsx', '.css'],
    modules: [path.resolve(__dirname, 'src/plugins'), 'node_modules'],
  },
  externals: {
    // jquery: '$',
    axios: 'axios'// 在资源文件中引入的哪个包名： 引入的JS文件创造的全局变量
  },
}


/*
optimization: {
        splitChunks: {
            chunks: "all",//默认作用于异步chunk，值为all/initial/async
            minSize: 30000,  //默认值是30kb,代码块的最小尺寸
            minChunks: 1,  //被多少模块共享,在分割之前模块的被引用次数
            maxAsyncRequests: 5,  //按需加载最大并行请求数量
            maxInitialRequests: 3,  //一个入口的最大并行请求数量
            name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
            automaticNameDelimiter: '~',//默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
            cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
                vendors: {
                    chunks: "initial",
                    test: /node_modules/,//条件
                    priority: -10 ///优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中,为了能够让自定义缓存组有更高的优先级(默认0),默认缓存组的priority属性为负值.
                },
                commons: {
                    chunks: "initial",
                    minSize: 0,//最小提取字节数
                    minChunks: 2, //最少被几个chunk引用
                    priority: -20,
                    reuseExistingChunk: true//    如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
                }
            }
        },
}
*/