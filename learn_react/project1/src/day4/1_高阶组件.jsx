// 高阶组件的本质就是一个高阶函数
// 高阶组件就是一个接受组件为参数 并且返回一个新的组件
import React from 'react';
import ReactDOM from 'react-dom';

/* function connect(Comp) {
  return class Temp extends React.Component {
    render() {
      return <Comp age={12} sex={1} />
    }
  }
} */

// function connect(Comp) {
//   return function (props) {
//     return <Comp age={12} sex={1} {...props} />
//   }
// }

/* function connect(obj) {
  return function (Comp) {
    return function (props) {
      return <Comp {...obj} {...props} />
    }
  }

}
 */

function connect(cb) {
  let init = { q: 1, w: 2, age: 1, sex: 1 }
  return function (Comp) {
    let obj = cb(init)
    return function (props) {
      return <Comp {...obj} {...props} />
    }
  }

}


class App extends React.Component {

  render() {
    console.log(this.props)
    return <div className=''>
      <h1>高阶组件</h1>
    </div>;
  }
}
// App = connect({ age: 12, sex: 1, qqq: 666 })(App)
App = connect((state) => {
  return {
    age: state.age + 123,
    sex: state.sex + 123
  }
})(App)

ReactDOM.render(<App className='box' />, document.getElementById('root'))