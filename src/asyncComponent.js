import React, { Component } from "react";

export default function asyncComponent(importComponent) {

  //接受一个 引入组件的方法 importComponent

  class AsyncComponent extends Component {

    constructor(props) {
      super(props);

      this.state = {
        // 定义一个正在加载的组件
        // component: null
        component: () => {
          return (
            <div>正在加载...</div>
          )
        }

      };
    }

    // 异步加载方法 
    async componentDidMount() {

      // 加载的组件是 default 解构出来的
      const { default: component } = await importComponent();

      // 将动态加载的组件保存在状态中
      this.setState({
        component: component
      });

    }

    render() {

      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}