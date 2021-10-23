// function add(a, b) {
//   return a + b
// }

// function minus() {
//   return a - b
// }
// // exports.add = add
// // exports.minus = minus
// let obj = { add, minus }
// // exports = obj// 错误的
// module.exports = obj
module.exports = {
  add(a, b) {
    return a + b
  },
  minus(a, b) {
    return a - b
  }
}