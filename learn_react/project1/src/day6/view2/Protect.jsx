import React from 'react';
import { Route, Redirect } from 'react-router-dom'
let isLogin = true;
let userLevel = 5;
class Protect extends React.Component {
  render() {
    let { path, component: Comp, level = 0, ...res } = this.props
    return <Route path={path} render={(props) => {
      console.log('protect执行了')
      if (isLogin) {
        if (userLevel >= level) {
          return <Comp {...props} {...res}></Comp>
        } else {
          return <Redirect to='/404' />
        }

      } else {
        return <Redirect to='/login' />
      }
    }}>

    </Route>;
  }
}
export default Protect