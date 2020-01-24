# 1、使用 安装 styled-componenets 管理 react 组件样式
## 使用 createGlobalStyle 创建全局样式 并初始化css
# 2、引入 阿里 icon 图标 /src/static/iconfont 
## 使用 createGlobalStyle 创建全局icon
# 3、使用安装 react-transition-group 实现动画
# 4、使用安装 redux 和 react-redux 管理数据
## 创建 store
## 创建 reducer
## 使用 Provider 包装 App
## 使用 connect 包装 组件
## 建立 store 与 dispatch 与组件 props 的关系
## 简化 Header 为无状态组件
## 5、store/index 中配置使用 redux devtool工具 
## 6、在 reducer中 使用 combineReducers (import { combineReducers } from 'redux') 合成 reducer
## 7、使用 actionType 和 actionCreator 规范化 action 的操作
## 8、使用 immutable 在 reducer中  创建不可变对象 state
## 9、配合 redux-immutable combineReducers 生成 不可变对象 state
## 10、 使用 redux-thunk 帮助派发函数 实现异步请求
## 11、安装 axios 在 public 目录 mock 接口数据
## 12、 注意 state中的数据是 immutable 对象
## 13、 引入 react 路由
## 14、 抽离组件
## 15、 使用 Purecomponent 优化首页性能（项目中有引入 immutable.js 避免踩坑）
## 16、 组件异步加载的实现 可使用第三方模块 例如 react-loadable(使用 withRouter 包装组件防止获取不到props)
## 17、 asyncComponent.js 实现异步加载
# 注意：不要在顶部的引入所有的组件。我们正在创建这些代码分割的功能，以便在必要时为我们进行动态导入。
# 参考：[【翻译】基于 Create React App路由4.0的异步组件加载（Code Splitting）]("https://segmentfault.com/a/1190000010067597")

## 项目来源： 慕课网： React16.4开发简书项目从零基础入门到实战 原作者：Dell