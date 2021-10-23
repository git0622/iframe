import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Child from './child'
class App extends React.Component {
  state = {
    list: [{ name: "张三", age: 10 }, { name: "张三2", age: 130 }, { name: "张三3", age: 104 }, { name: "张三4", age: 140 }]
  }
  parent_del(n) {
    let temp = [...this.state.list];
    temp.splice(n, 1)
    this.setState({
      list: temp
    })
  }
  render() {
    let { list } = this.state;
    return <div className=''>
      <h1>父组件</h1>
      <Child data={list} onDel={this.parent_del.bind(this)} />
    </div>;
  }
}

function App2() {
  let [list, setList] = useState([{ name: "张三", age: 10 }, { name: "张三2", age: 130 }, { name: "张三3", age: 104 }, { name: "张三4", age: 140 }])
  const parent_del = (n) => {
    let temp = [...list];
    temp.splice(n, 1)
    setList(temp)
  }
  return <div className=''>
    <h1>父组件</h1>
    {/* <Child data={list} onDel={parent_del} >
      <p>{123123132131}</p>
    </Child> */}
    <Child data={list} onDel={parent_del} render={(item) => {
      return <h1>姓名：{item.name};年龄：{item.age}</h1>
    }}>

    </Child>
  </div>;
}

ReactDOM.render(<App2 />, document.getElementById('root'))