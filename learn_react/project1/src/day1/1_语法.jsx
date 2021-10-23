import React from 'react'
import ReactDOM from 'react-dom'

let str = "hello world"
let sty = { color: 'red', fontSize: '30px' }
let h1 = <h1 style={sty}>{str}</h1>
let h2 = <h2 style={sty}>{str}</h2>
let cls = 'box';

let list = [{ name: "张三" }, { name: "张三2" }, { name: "张三3" }, { name: "张三4" }]
let ary = [1, 2, 3, 4, <b>dddd</b>, 'wwww']
// let ary2 = [<li>账单</li>, <li>账单</li>, <li>账单</li>, <li>账单</li>]
/* 
  就把HTML结构当作一种数据类型即可
  在结构当中 想使用变量的时候 需要用 {只能写表达式（赋值，变量调用的， 函数执行，  三元表达式）不能写语句} 包裹起来
  类名需要写成className  for-->htmlFor
  行内样式  需要写成{对象}
  判断语句 我们一般使用  三元表达式
  循环语句我们一般使用 map
  普通对象 不能直接作为react的儿子存在

  */

function fn(n) {
  if (n > 2) {
    return h1
  } else {
    return h2
  }
}
function renderAry(ary) {
  let t = [];
  for (let i = 0; i < ary.length; i++) {
    t.push(<li key={i}>{ary[i].name}</li>)
  }
  return t
}

function App() {
  return <div className={'qqq ' + cls}>
    {JSON.stringify(sty)}
    {
      list.map(item => {
        return <li key={item.name}>{item.name}</li>
      })
    }
    {
      renderAry(list)
    }
    <input type="checkbox" id="qqq" /><label htmlFor='qqq'>qqq</label>
    {
      fn(10)
    }
    {
      fn(1)
    }
    {
      1 > 2 ? <h1>不可能</h1> : <h3>1小于2</h3>
    }

  </div>
}
ReactDOM.render(<>
  <App />
</>, document.getElementById('root'))