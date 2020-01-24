import React, { Component, Fragment } from 'react'
// 组件
import Header from './common/Header'

// 引入异步加载组件 的方法 
import asyncComponent from './asyncComponent'

// 引入 路由
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 异步加载
const Home = asyncComponent(() => import('./pages/home'));
const Detail = asyncComponent(() => import('./pages/detail'));
const Login = asyncComponent(() => import('./pages/login'));


// 路由页面 （直接加载）
// import Home from './pages/home'
// import Detail from './pages/detail'
// import Login from './pages/login'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* 头部公共组件 */}
          <Header />
          {/* 首页 */}
          <Route path='/' exact component={Home}></Route>
          {/* 详情页 */}
          <Route path='/detail/:id' exact component={Detail}></Route>
          {/* <Route path='/detail' exact component={Detail}></Route> */}
          {/* 登录页 */}
          <Route path='/login' exact component={Login}></Route>
        </Router>
      </Fragment>
    )
  }
}
