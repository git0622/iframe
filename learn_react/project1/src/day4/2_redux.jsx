/*
  redux 是一个数据管理模型  跟react没有任何关系；只不过是经常使用在react中
    单一数据源
    状态state只读
    只能通过纯函数修改state


  react-redux 就是把redux和react进行了一个绑定  
  1 使用Provider把根组件包裹起来  一个项目使用一次就可以了
  2 哪个后代组件想要使用redux中的数据  就使用connect处理哪个组件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
// console.log(store.getState())
// console.log(store.dispatch({ type: "changeName", name: "珠峰培训" }))
// console.log(store.getState())
store.subscribe(() => {
  console.log("数据修改完成了")
})
class App extends React.Component {
  add = () => {
    store.dispatch({ type: "changeCount", num: 10 })
    console.log(store.getState())
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    let state = store.getState()
    return <div className=''>
      <h1>姓名：{state.name}；<br></br>
      年龄：{state.age}；<br></br>
      计数：{state.count}</h1>

      <button onClick={this.add}>+</button>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))