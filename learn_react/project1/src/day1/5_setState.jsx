import React, { useState } from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  state = {
    count: 100,
    name: "珠峰"
  }

  add(n) {
    // this.state.count = this.state.count + n;
    // this.setState({})
    /* 
    
      setState 大部分情况下是一个异步更新数据的操作
      合成事件
    */
    // console.log(this.state)
    // this.setState({
    //   count: this.state.count + n
    // })
    // console.log(this.state)
    this.setState({
      count: this.state.count + 100 // count:100+100
    }, () => {
      console.log('1', this.state.count)
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 100 // count :100+100
    }, () => {
      console.log('2', this.state.count)
    })
    this.setState({
      count: this.state.count + 100 //count:100+100
    }, () => {
      console.log('3', this.state.count)
    })
    this.setState({
      count: this.state.count + 100// count:100+100
    }, () => {
      console.log('4', this.state.count)
    })
  }
  minus(n) {
    // this.state.count = this.state.count - n;
    // 
    // this.setState((oldState, oldProps) => {

    //   return {
    //     count: oldState.count - n
    //   }
    // })
    this.setState({
      count: this.state.count += 100 // count:200
    }, () => {
      console.log('1', this.state.count)
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count += 100 // count :200+100
    }, () => {
      console.log('2', this.state.count)
    })
    this.setState({
      count: this.state.count += 100 //count:300+100
    }, () => {
      console.log('3', this.state.count)
    })
    this.setState({
      count: this.state.count += 100// count:400+100
    }, () => {
      console.log('4', this.state.count)
    })
  }
  render() {
    console.log('render')
    let { count, name } = this.state;
    return <div className=''>
      <h1>{name}当前数字是：{count}</h1>
      <button onClick={() => { this.add(20) }}>+</button>
      <button onClick={() => { this.minus(5) }}>-</button>
    </div>;
  }
}


function App2() {
  let [state, setState] = useState({
    name: '珠峰',
    count: 100
  })
  // console.log(state, setState)
  const add = (n) => {
    // count = count + n
    // console.log(count)
    setState({
      ...state,
      count: state.count + n
    })
  }
  const minus = (n) => {
    // count = count - n
    setState({
      ...state,
      count: state.count - n
    })
  }
  return <div className=''>
    <h1>{state.name}当前数字是：{state.count}</h1>
    <button onClick={() => { add(20) }}>+</button>
    <button onClick={() => { minus(5) }}>-</button>
  </div>;
}

function App3() {
  let [name, setName] = useState("珠峰")
  let [count, setCount] = useState(100)
  // console.log(state, setState)
  const add = (n) => {
    setCount(count + n)
    console.log(count)
  }
  const minus = (n) => {
    // count = count - n
    setCount(count - n)
  }
  return <div className=''>
    <h1>{name}当前数字是：{count}</h1>
    <button onClick={() => { add(20) }}>+</button>
    <button onClick={() => { minus(5) }}>-</button>
    <button onClick={() => { setName("珠峰培训") }}>改名字</button>
  </div>;
}

ReactDOM.render(<App3 qq={123} />, document.getElementById('root'))