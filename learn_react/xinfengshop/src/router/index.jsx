import React, { Suspense, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loading from '../comonents/loading'
// import Layout from '../views/layout'
// import Login from '../views/login'
// const Layout = React.lazy(() => import(/*webpackChunkName:"layout"*/'../views/layout'))
// const Login = React.lazy(() => import(/*webpackChunkName:"login"*/'../views/login'))


function loadable(obj) {
  let { loader, loading: Loading } = obj;
  // loader返回值是一个promise实例  then获取的数据才是请求过来的组件
  let Comp;
  return function (props) {
    let [flag, setFlage] = useState(false);
    // flag 是true 就是说明组件已经加载或来了
    if (!flag) {
      loader().then(data => {
        // data.default 对应的才是获取到的组件
        Comp = data.default
        setFlage(true)
      })
    }

    return <>
      {
        flag ? <Comp {...props} /> : <Loading></Loading>
      }
    </>
  }
}
const Layout = loadable({
  loader: () => import(/*webpackChunkName:"layout"*/'../views/layout'),
  loading: Loading,
})
const Login = loadable({
  loader: () => import(/*webpackChunkName:"login"*/'../views/login'),
  loading: Loading,
})
class App extends React.Component {
  render() {
    return <HashRouter>
      {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/404' render={() => <h1>404</h1>}></Route>
        <Route path='/' component={Layout}></Route>
      </Switch>
      {/* </Suspense> */}
    </HashRouter>;
  }
}
export default App