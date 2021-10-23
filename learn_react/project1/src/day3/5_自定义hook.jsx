import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// 自定义hook 规则就是 use开头后边第一个字母大写的函数即可
function useAddCount(initValue, timer, step) {
  let [count, setCount] = useState(initValue)
  const add = () => {
    setTimeout(() => {
      setCount(count + step)
    }, timer);
  }
  return [count, add]
}
function App() {
  let [count, add] = useAddCount(100, 4000, 10)
  return <>
    <h1>{count}</h1>
    <button onClick={add}>+</button>
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))