let { merge } = require('webpack-merge')
let common = require('./webpack.common')
let webpack = require('webpack')
let path = require('path')
let mock = require('../mock/app.js')
module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      //  编译阶段的犬奴常量
      www: 1234
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, '../json'),
    proxy: {
      // '/api': 'http://localhost:9000'
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,//可以改变后端服务接受到的host
      }
    },
    before: mock
    // before(app) {
    //   app.get('/api/list', function (req, res) {
    //     res.json({ custom: 'response' });
    //   });
    //   app.post('/api/login', function (req, res) {
    //     res.json({
    //       user: 'zhufeng',
    //       msg: '登录陈工'
    //     })
    //   })
    // }
  }
})

