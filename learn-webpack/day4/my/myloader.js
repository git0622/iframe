// module.exports = function (source) {
//   // source 对应的就是 loader解析的哪个模块的内容
//   console.log(source)
//   source += `//hello 自己的loader`
//   return source
// }

const parser = require('@babel/parser');// 可以把js源码转成 ast语法树
const traverse = require('@babel/traverse').default // 可以递归遍历 ast节点
const generator = require('@babel/generator').default; // 把修改好的ast语法树 再转成源码字符串
const types = require('@babel/types') // 操作节点的增删改
module.exports = function (source) {
  console.log('-------------loader执行了')
  const ast = parser.parse(source, { sourceType: 'module' })
  // console.log(ast.program.body);
  traverse(ast, {
    CallExpression(path) {
      // console.log(path)
      if (types.isMemberExpression(path.node.callee) && types.isIdentifier(path.node.callee.object, { name: 'console' })) {
        path.remove()
      }
    }
  })
  const output = generator(ast, {}, source);
  return output.code
}