import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  state = {
    name: '珠峰'
  }
  changeName(e) {
    // console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  render() {
    let { name } = this.state;
    return <div className=''>
      <h1>{name}</h1>
      <input type="text" value={name} onChange={(e) => { this.changeName(e) }} />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))