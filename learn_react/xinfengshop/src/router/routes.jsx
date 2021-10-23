import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from '../comonents/loading'
import Protect from './Protect'
const Introduce = React.lazy(() => import('../views/introduce'))
const Dashbord = React.lazy(() => import('../views/dashbord'))
const Add = React.lazy(() => import('../views/add'))

function Routes(props) {
  return <div className="content_box">
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect path='/' exact to='/introduce'></Redirect>
        <Protect path='/introduce' component={Introduce}></Protect>
        <Protect path='/dashbord' component={Dashbord}></Protect>
        <Protect path='/add' level={5} component={Add}></Protect>
      </Switch>
    </Suspense>

  </div>
}

export default Routes