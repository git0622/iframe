/*
  缓冲区Buffer 是暂时存放输入输出数据的一段内存
  字节 （byte） 一个字节使用8为二进制表示
*/

// let b1 = new Buffer(12)// 12 是指的字节数  
// b1.write("珠峰", 0, 6, 'utf-8')
// //一个汉字由三个字节组成
// //b1.write(string,编写的起始位置,写多少个字节，编码格式)
// console.log(b1.toString())

// let b2 = Buffer.alloc(12)// 创造了一个12个字节到校的buffer
// let b2 = Buffer.alloc(11, '珠峰培训')
// console.log(b2.toString())

let b3 = Buffer.from("hello")
let b32 = Buffer.from("珠峰")
let b33 = Buffer.from("培训")

let concatB3 = Buffer.concat([b3, b32, b33])
console.log(concatB3.toString())
console.log(concatB3.slice(1, 4).toString())

let b4 = Buffer.alloc(12);
b3.copy(b4, 0, 0, 3)
// b3.copy(b4,b4Start,b3Start,b3Length)// 把b3复制到b4中
console.log(b4.toString())
/*
  buffer 是什么？
  怎么创建 ？
  copy slice concat toString
  length

*/