import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  state = {
    name: "珠峰"
  }
  www = React.createRef()
  changeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  componentDidMount() {
    // 组件加载完成之后触发
    console.log(this)
    // this.refs.qqq.value = this.state.name
    // this.qqq.value = this.state.name
    console.log(this.www)
    this.www.current.value= this.state.name
  }
  render() {
    let { name } = this.state
    return <div className=''>
      <input type="text" value={name} onChange={this.changeName.bind(this)} />
      {/* <input type="text" ref='qqq' /> */}
      {/* <input type="text" ref={(el) => { this.qqq = el }} /> */}
      <input type="text" ref={this.www} />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))