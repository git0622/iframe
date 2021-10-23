/*
  流 是一组有序的字节数据
*/
let fs = require('fs')
// 创造可读流

// let rs = fs.createReadStream('./test.txt')
// let str = ''
// /* 
//   open  data  end error  都是可读流对应的事件  node规定的
// */
// rs.on('open', function (fd) {
//   // console.log('打开文件：', fd)
// })
// rs.on('data', function (chunk) {
//   //  接受数据的时候 会触发这个data事件
//   // chunk 一段一段的数据流
//   // console.log(chunk)
//   rs.pause() // 暂停 
//   str += chunk;
// })
// setTimeout(() => {
//   rs.resume()//和重启
// }, 2000);
// rs.on('end', () => {
//   console.log('end:', str)
// })

// //  可写流： 
// let ws = fs.createWriteStream('./test2.txt')
// for (let i = 0; i < 5; i++) {
//   ws.write(i + '')
// }

// // ws.end()



// pipe

let rs = fs.createReadStream('./test.txt')
let ws = fs.createWriteStream('./test2.txt')
rs.pipe(ws)