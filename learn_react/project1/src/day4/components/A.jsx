import React, { useState } from 'react';
import { connect } from 'react-redux'
import { changeCount } from '../store/reducers/A_actions'
class A extends React.Component {
  state = {
    todo: ''
  }
  render() {
    let { name, title, count, dispatch } = this.props;
    let { todo } = this.state
    return <div className=''>
      <h1>A组件</h1>
      <button onClick={() => {
        // setTimeout(() => {

        // }, 2000);
        dispatch(changeCount(20))

      }}>+</button>
      <p>名字{name}；标题{title}；数字：{count}</p>
      <input type="text" value={todo} onChange={(e) => { this.setState({ todo: e.target.value }) }} onKeyDown={e => {
        if (e.keyCode == 13) {
          dispatch({ type: 'ADD', todo: { id: Math.random(), text: todo } })
          this.setState({ todo: '' })
        }
      }} />
    </div>;
  }
}
A = connect(state => {
  return {
    name: state.A.name,// A 属性对应的是A的reducer中的数据
    title: state.B.title,// B属性对应的是 B的reducer中的数据
    count: state.A.count
  }
}, dispatch => {
  return {
    dispatch: dispatch
  }
})(A)
export default A