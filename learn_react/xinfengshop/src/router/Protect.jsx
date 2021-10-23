
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// let isLogin = false;
// let userLevel = 2;
function Protect(props) {
  let { isLogin, userLevel } = props
  if (isLogin) {
    if (props.level && props.level > userLevel) {
      return <Redirect to='/404'></Redirect>
    }
    return <Route {...props}></Route>
  } else {
    return <Redirect to='/login'></Redirect>
  }
}
Protect = connect(state => {
  return {
    isLogin: state.B.token ? true : false,
    userLevel: state.B.userLevel
  }
})(Protect)

export default Protect