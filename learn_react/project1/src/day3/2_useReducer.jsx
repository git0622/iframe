import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
// useReducer  是 useState的一个替代方案
// useRef 主要是为了获取 函数组件中的DOM元素的
//  在react中 可以通过ref获取对应子组件 但是 需要我们注意的是  ref只能获取类组件  不能获取函数式组件；获取DOM元素无差别

function reducer(state, action) {
  // debugger
  // action 就是一个普通对象 {type:"add",xxx:3453}
  switch (action.type) {
    case 'ADDCOUNT':
      return {
        ...state,
        count: state.count + action.count
      }
    case "ADDAGE":
      return {
        ...state,
        age: state.age + action.age
      }
    default:
      return {
        ...state
      }
  }


}
class Child_class extends React.Component {
  render() {
    return <h2>类组件</h2>
  }
}
function Child_fun() {
  return <h3>函数组件</h3>
}
function App() {
  // dispatch(action)
  // dispatch 派发  
  //派发的都是一个action 派发的这个action 会被reducer接受，reducer根据对应的逻辑算出新的state值
  let [state, dispatch] = useReducer(reducer, {
    count: 100,
    age: 12
  })
  let h1 = useRef(null);
  // 每次更新的时候 获取的state都是 reducer返回的新的state
  const addCount = () => {
    dispatch({ type: "ADDCOUNT", count: 5 })
    console.log(h1.current)
  }
  const addAge = () => {
    dispatch({ type: "ADDAGE", age: 5 })
  }
  // 
  return <div className=''>
    <h1 >count:{state.count}; age:{state.age}</h1>
    <button onClick={addCount}>+count</button>
    <button onClick={addAge}>+age</button>
    <Child_class></Child_class>
    <Child_fun />
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'))