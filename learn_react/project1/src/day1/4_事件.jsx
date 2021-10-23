import React from 'react';
import ReactDOM from 'react-dom';
/* 
  类组件  需要保证函数中的this式当前实例
          参数怎么传递

*/
class App extends React.Component {
  // constructor(){
  //   super();
  //   this.fn = ()=>{}
  // }
  fn(e) {
    console.log('hello', arguments)
  }
  // fn = () => {
  //   console.log('qqq', this)
  // }
  render() {
    //  render函数中的this就是我们当前的实例
    return <div className=''>
      <button onClick={(e) => { this.fn(e, 1, 2, 3, 4, 5) }}>hello</button>
      <button onClick={this.fn.bind(this, 1, 2, 3, 4, 5)}>hello</button>
      {/* <button onClick={this.fn}>hello</button> */}

    </div>;
  }
}

function App2() {
  const fn = (...args) => {
    // 箭头函数是把 this和arguments当作了函数体内的两个普通变量
    console.log(args)
  }
  return <>
    <button onClick={fn}>qq</button>
    <button onClick={() => { fn(1, 2, 3, 4) }}>qq</button>
    <button onClick={fn.bind(null, 1, 2, 3, 4)}>qq</button>
  </>
}

ReactDOM.render(<App2 />, document.getElementById('root'))