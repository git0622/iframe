import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
class App extends React.Component {
  componentDidMount() {
    this.clear1 = store.subscribe(() => {
      this.setState({})
    })

    this.clear2 = store.subscribe(() => {
      console.log(2222)
    })


    setTimeout(() => {
      this.clear2()
    }, 5000);

  }
  render() {
    let state = store.getState();
    console.log(state)
    return <div className=''>
      <h1 style={{ color: state.B.color }}>数字是{state.A.count}；类型：{state.A.type}</h1>
      {/* <h1>数字是{state.A.count}；类型：{state.A.type}</h1> */}

      <button onClick={() => {
        let res = store.dispatch({ type: "ADD", n: 5 })
        console.log(res)
      }}>+</button>

      <input type="color" onChange={e => {
        console.log(e.target.value)
        let res = store.dispatch((dispatch) => {
          setTimeout(() => {
            dispatch({ type: "CHANGECOLOR", col: e.target.value })
          }, 1000);
          return 666
        })
        console.log('res', res)
      }} />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))