import React from 'react';
import { withRouter } from 'react-router-dom'
class A extends React.Component {
  render() {
    console.log(this.props)
    return <div className=''>
      登录组件
    </div>;
  }
}
export default withRouter(A)