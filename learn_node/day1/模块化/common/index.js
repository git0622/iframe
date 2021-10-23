/* 
  每一个模块 都有  require  exports  module __dirname  __filename
  __dirname: 当前文件所在文件夹的绝对目录
  __filename：当前文件的绝对目录
*/


let a_obj = require('./a.js')
let b_obj = require('./b.js')
// console.log(a_obj, b_obj, 333, 666)
// b.obj.add(a_obj.a, a_obj.b)

console.log(require.cache)