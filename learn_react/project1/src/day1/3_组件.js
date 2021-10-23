/*
  组件都是函数
  组件可分为两类： 静态组件(函数式组件) hooks专门为函数式组件准备额
                  类组件
  组件首字母必须大写

  组件有两个数据源
  state 状态 组件自己独享的数据
  props 属性 父组件传进来的数据

*/

import React from 'react';
import ReactDOM from 'react-dom';
function App(props) {
  console.log(props)
  return <>
    <h1>
      函数式组件
    </h1>
  </>
}
console.log(React.Component)
class App2 extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    name: "珠峰"
  }
  state123 = {
    name: "培训"
  }
  render() {
    console.log(this.props)
    return <>
      {this.state.name}
      {this.state123.name}
      <h1>类组件</h1>
    </>
  }
}


ReactDOM.render(<>
  <App qqq={[1, 2, 3, 4]} />
  <App2 www={{ qqq: 12345 }} />
</>, document.getElementById('root'))