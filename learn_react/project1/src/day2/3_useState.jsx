import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';

let hookState = [];
let hookIndex = 0;
/* function useState(initState) {
  hookState = hookState || initState
  function setState(newState) {
    hookState = newState
    render()
  }
  return [hookState, setState]
} */
function useState(initState) {
  console.log(hookState)
  hookState[hookIndex] = hookState[hookIndex] || initState;
  let currentIndex = hookIndex
  function setState(newState) {
    hookState[currentIndex] = newState
    render()
  }
  hookIndex++
  return [hookState[currentIndex], setState]
}
function App() {
  console.log('render')
  let [count, setCount] = useState(100)
  let [name, setName] = useState('珠峰')
  const log = () => {
    setTimeout(() => {
      console.log('count')
    }, 3000);
  }
  return <Fragment>
    <h1>{name}{count}</h1>
    <button onClick={() => { setCount(count + 1) }}>+</button>
    <button onClick={log}>log</button>
  </Fragment>
}
function render() {
  hookIndex = 0
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()
