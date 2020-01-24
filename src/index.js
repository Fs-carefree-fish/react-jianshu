import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//  全局样式
import { GlobalStyle } from './style'
// iconfont
import { GlobalIconFont } from './static/iconfont/iconfont'




import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalIconFont />
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>, document.getElementById('root'));
