import React from 'react';
import { connect } from 'react-redux'
import { add, minus } from '../store/actions/countAction'
import { test } from '../api/api'
class Introduce extends React.Component {
  render() {
    let { count, type, dispatch } = this.props
    return <div className=''>
      介绍组件
      <h1>{type}:{count}</h1>
      <button onClick={() => { dispatch(add(10)); test() }}>+</button>
      <button onClick={() => { dispatch(minus(5)) }}>-</button>
    </div>;
  }
}
Introduce = connect(state => ({ ...state.A }), dispatch => ({ dispatch }))(Introduce)
export default Introduce