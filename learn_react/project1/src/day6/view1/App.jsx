import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'
/* 
Link 相当于vueRouter的router-link
Route 相当于 VUeRouter的router-view
Switch 一旦有一个路径匹配上了 下边的Route就不再查看了
通过 props中的history中的push或者replace来实现编程式导航
只有哪些通过 router渲染的组件才会有 history这类的属性
若不是路远渲染出来的组件也想使用这个属性 就用withROuter这个Api处理对应组件即可

query（问号传参）
params  this.props.match.params
state to={{pathname:'/xx',state:{}}} 谷歌浏览器刷新不会丢失
 */
import Home from './Home'
import About from './About'
import List from './List'

function NoFound() { return <h1>404</h1> }
class App extends React.Component {

  render() {
    return <div className=''>
      <NavLink to='/home?q=123&b=345'>home</NavLink>
      <NavLink to={{ pathname: '/about', state: { qqq: !23, www: 345 } }}>about</NavLink>
      <NavLink to='/list/23424'>list</NavLink>
      <Switch>
        {/* <Redirect path='/' exact to='/home'></Redirect> */}
        <Route path='/' exact render={(...arg) => {
          console.log('重定向了', arg)
          return <Redirect to='/home'></Redirect>
        }}></Route>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/list/:id' component={List} />
        <Route path='/*' render={() => <h3>444044</h3>} />
        {/* <Route path='/*' component={NoFound} /> */}
      </Switch>
    </div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))