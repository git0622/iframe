/* 
  全局变量  global  process
*/
const { program } = require('commander');
program.version('0.0.1');
program
  .option('-d, --ddd <v>', 'output extra debugging')
  .option('-s, --sss <v>', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

// console.log(process.platform) // 当前执行文件 所在的系统
// console.log(process.argv)
// 第一个参数是node的地址  第二个参数是执行文件的地址
// console.log(program.parse(process.argv))
process.env.qqq = 123

console.log(process.env.qqq)