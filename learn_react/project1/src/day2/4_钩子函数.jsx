import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, this.props)
    if (nextProps.num === this.props.num) {
      return false
    }
    return true
  }
  render() {
    console.log('render')
    return <h1>{this.props.num}</h1>
  }
}

class App extends React.Component {
  // constructor() {
  //     super();

  // }
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount')
  // }
  // UNSAFE_componentWillUpdate()  beforeUpdate
  // UNSAFE_componentWillReceiveProps()
  state = {
    count: 123,
    age: 12
  }
  static getDerivedStateFromProps(props, state) {
    // 这个钩子会在render之前调用
    // 不能跟 componentWillMount 同时存在
    return {
      ...props
    }
  }
  // shouldComponentUpdate() {
  //   //  这是一个用优化的钩子函数
  // }

  // 常用的 componentDidMount()   shouldComponentUpdate    componentWillUnmount
  render() {
    // console.log(this.state)
    let { count, age } = this.state;
    return <div className=''>
      <h1>{age}</h1>
      <button onClick={() => { this.setState({ age: age + 1 }) }}>+age</button>
      <button onClick={() => { this.setState({ count: count + 10 }) }}>+count</button>
      <Child num={count} />

    </div>;
  }
}

ReactDOM.render(<App qq={123} />, document.getElementById('root'))