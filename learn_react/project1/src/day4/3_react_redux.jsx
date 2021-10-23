/*
  redux 是一个数据管理模型  跟react没有任何关系；只不过是经常使用在react中
    单一数据源
    状态state只读
    只能通过纯函数修改state


  react-redux 就是把redux和react进行了一个绑定  

*/
import React from 'react';
import ReactDOM from 'react-dom';
import store123 from './store/index'
import { Provider, connect } from 'react-redux'
import Child from './components/child'
import Child2 from './components/child2'

class App extends React.Component {
  add = () => {
    this.props.dispatch({ type: "changeCount", num: 10 })
  }

  render() {
    console.log(this.props)
    let { name, age, count } = this.props;
    return <div className=''>
      <h1>姓名：{name}；<br></br>
      年龄：{age}；<br></br>
      计数：{count}</h1>

      <button onClick={this.add}>+</button>
      <Child />
      <Child2 />
    </div>;
  }
}
App = connect(state => {
  // 这个state就是 store.getState()的返回结果
  return {
    name: state.name,
    age: state.age,
    count: state.count,
    qqq: 234234
  }
}, dispatch => {
  // dispatch 就是 store.dispatch
  return {
    dispatch
  }
})(App)

ReactDOM.render(<Provider store={store123}>
  <App />
</Provider>, document.getElementById('root'))