import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
/* 
  上下文 context 主要是为了解决组件间的数据交互问题  父组件提供一个上下文
  所有的后代组件都可以使用 类似于vue的 peovide/inject

  类组件使用上下文  需要写 static contextType = xxxContext
  函数组件使用上下文  需要写  let xxx = useContext(xxxContext)
*/
let MyContext = React.createContext()

class Child extends React.Component {
  static contextType = MyContext
  render() {
    console.log(this.context)
    return <>
      <h2>类组件 </h2>
      <Child2 />
    </>
  }
}

function Child2() {
  let context = useContext(MyContext)
  console.log(arguments)
  console.log(context)
  return <h2>函数组件</h2>
}
class App extends React.Component {

  static contextType = MyContext
  render() {
    console.log(this.context)
    return <div className=''>
      <Child />
    </div>;
  }
}

ReactDOM.render(
  <MyContext.Provider value={{ name: "珠峰" }}>
    <App />
  </MyContext.Provider>
  , document.getElementById('root'))