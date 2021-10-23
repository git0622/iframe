import React, { Fragment, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
let index = 0;
let outCount = 100;
function App() {
  let [count, setCount] = useState(() => {
    console.log('useState的回调函数')
    return 100
  })
  let ref = useRef();
  console.log(`第${index}次 render App ${count}`)
  index++
  const log = () => {
    setTimeout(() => {
      // console.log('count', outCount, ref.current)
      setCount((latest) => {
        console.log(latest)
        return latest + 10
      })
    }, 3000);
  }
  return <Fragment>
    <h1>{count}</h1>
    <button onClick={() => { setCount(count + 1); outCount = count + 1; ref.current = count + 1 }}>+</button>
    <button onClick={log}>log</button>
  </Fragment>
}

ReactDOM.render(<App />, document.getElementById('root'))