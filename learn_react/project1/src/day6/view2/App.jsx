import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Protect from './Protect'

import Home from './Home'
import About from './About'
import List from './List'
import Login from './login'

class App extends React.Component {

  render() {
    return <div className=''>
      <NavLink to='/home?q=123&b=345'>home</NavLink>
      <NavLink to={{ pathname: '/about', state: { qqq: !23, www: 345 } }}>about</NavLink>
      <NavLink to='/list/23424'>list</NavLink>
      <Switch>
        <Route path='/' exact render={(...arg) => {
          console.log('重定向了', arg)
          return <Redirect to='/home'></Redirect>
        }}></Route>
        <Route path='/login' component={Login} />
        {/* <Route path='/home' render={() => {
          return isLogin ? <Home /> : <Redirect to='/login'></Redirect>
        }} />
        <Route path='/about' component={About} />
        <Route path='/list/:id' component={List} /> */}
        <Protect path='/home' level={5} component={Home} />
        <Protect className='qqq' level={6} path='/about' component={About} />
        <Protect path='/list/:id' level={7} component={List} />
        <Route path='/*' render={() => <h3>444044</h3>} />
      </Switch>
    </div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))