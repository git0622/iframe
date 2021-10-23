let common = require('./webpack.common')
let { merge } = require('webpack-merge')
let webpack = require('webpack');
module.exports = merge(common, {
  mode: 'production',

  plugins: [

    new webpack.DefinePlugin({
      www: 666
    })
  ]
})