let path = require('path')
let url = require('url')
console.log('resolve:', path.resolve(__dirname, '/package.json'))
// console.log('resolve:', path.resolve(__dirname, '../.gitignore'))

console.log('join:', path.join(__dirname, '/package.json'))
// console.log('join:', path.join(__dirname, '../.gitignore'))
// 处理相对路径的时候 两者没有却别 绝对目录是  join不识别
let str = 'http://baidu.com?qwe=123&ww=234&aaa=567'
// console.log(url.parse(str, true))
let res = new URL(str)
console.log(res)


// fs   http  buffer  流   egg  express koa2