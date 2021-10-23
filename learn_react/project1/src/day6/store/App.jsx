import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
// import {Provider,connect} from 'react-redux'
import {Provider2,connect} from './myreactRedux'

function Child(props){
  console.log(props)
  return <h1>儿子组件{props.count} {props.qq}</h1>
}
Child = connect(state=>({count:state.A.count}))(Child)

class App extends React.Component {
  
  render() {
    return <div className=''>
      <Child qq={1234}/>
      <h1 style={{ color: this.props.B.color }}>数字是{this.props.A.count}；类型：{this.props.A.type}</h1>

      <button onClick={() => {
        let res = store.dispatch({ type: "ADD", n: 5 })
        console.log(res)
      }}>+</button>

      <input type="color" onChange={e => {
        console.log(e.target.value)
        let res = this.props.dispatch((dispatch) => {
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
App = connect(state=>{
  return {
    ...state
  }
},dispatch=>{
  return {
    dispatch
  }
})(App)

ReactDOM.render(<Provider2 store={store}>
  <App />
</Provider2>, document.getElementById('root'))