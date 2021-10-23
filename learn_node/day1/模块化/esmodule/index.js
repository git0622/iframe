// import aaa from './a.js'
import aaa, { a, b } from './a.js' // 对应的导出里边需要有一个名字是a的导出
import bbb, { add, minus } from './b.js'
import * as qqq from './a.js' // 把 a文件中的所有导出 作为 qqq 在当前文件使用

console.log(qqq)


/*
  import xxx from './sss' 这种导入对应的 都是该文件的默认导出  export default
  import {} from './qqq'  这种导入对应额是该文件 有名字的导出  export 声明关键字(let var const function class)
*/