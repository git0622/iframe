import React, { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

function Child(props) {
  console.log('render')
  return <>
    <h1>{props.data.count}</h1>
    <button onClick={props.onChangeCount}>child + count</button>
  </>
}
Child = React.memo(Child)
//  React.memo  useMemo  useCallback 三个是一个组合 主要用于优化
//  useMemo 主要是用来缓存对象地址的
//  useCallback 主要用来缓存函数地址

function App() {
  let [count, setCount] = useState(100)
  let [age, setAge] = useState(12)
  // let obj = {
  //   count: count
  // }
  let obj = useMemo(() => {
    return {
      count: count
    }
  }, [count])
  let f = () => { console.log(666); setCount(count + 10) }
  f = useCallback(f, [])
  return <>
    {/* <Child count={count} /> */}
    <Child data={obj} onChangeCount={f} />
    <button onClick={() => { setCount(count + 3) }} >+count</button>

    <h2>{age}</h2>
    <button onClick={() => { setAge(age + 1) }}>+age</button>
  </>
}



























// React.memo 类似于 PureComponent; 却别在于 React.memo只管props;PureComponent管props和state
/* class Child extends React.PureComponent {
  // PureComponent 内实现了  shouldComponentUpdate  只会进行浅层比较
  render() {
    console.log('render')
    return <h1>{this.props.count}</h1>
  }
}


class App extends React.Component {
  state = {
    count: 100,
    age: 12
  }
  render() {
    let { count, age } = this.state
    return <div className=''>
      <Child count={count} />
      <button onClick={() => { this.setState({ count: count + 3 }) }}>+count</button>

      <h2>{age}</h2>
      <button onClick={() => { this.setState({ age: age + 1 }) }}>+age</button>
    </div>;
  }
}
 */
ReactDOM.render(<App />, document.getElementById('root'))