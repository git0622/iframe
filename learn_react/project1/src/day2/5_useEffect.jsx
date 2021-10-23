import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Child(props) {

  console.log('child render')
  // useEffect(() => {
  //   console.log('child 单个componentDidMount')
  //   return () => {
  //     console.log('child组件销毁了')
  //   }
  // }, [])
  return <h1>child {props.count}</h1>
}
Child = memo(Child)
// memo 处理过的组件  相当于自动执行的类似于类组件的shouldComponentUpdate
//  只要传进来的数据不发生改变  那么 对应的组件就不会重新渲染
/* 
  hook只能用在最顶层作用域

  useMemo  useCallback  + memo 是用来优化的

  useReducer

  自定义hook
*/
function App() {
  // let [count, setCount] = [];
  // if (true) {
  //   [count, setCount] = useState(100)
  // }
  let [count, setCount] = useState(100)
  let [age, setAge] = useState(12)
  function qqq() {
    console.log(age)
  }
  useEffect(() => {
    // console.log('componentDidMount + componentDidUpdate 结合体')
    qqq()
    // return () => {
    //   // console.log("返回的回调函数什么时候执行？ 当下一次 useEffect的参数执行的时候 会把上一个参数执行的返回的那个回调执行")
    // }
  }, [])
  // useEffect(() => {
  //   console.log('单个componentDidMount')
  // }, [])
  // useEffect(() => {
  //   console.log('只有count发生改变的时候 才会触发这个钩子')
  // }, [count])
  return <>
    <h1>{count}</h1>
    <button onClick={() => { setCount(count + 1) }}>+</button>
    <h2>{age}</h2>
    <button onClick={() => { setAge(age + 10) }}>+</button>
    {
      // count % 2 ? <Child /> : null
    }
    <Child count={count} />
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))