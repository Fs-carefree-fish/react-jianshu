import React, { Component } from 'react'
// import React from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button,

} from './style'

// 引入 react-transition-group
import { CSSTransition } from 'react-transition-group'

//引入 connect 做 redux 连接
import { connect } from "react-redux";

// 导入 action 
import { actionCreator } from './store'

import { Link } from 'react-router-dom'

//以下代码可以简化为 无状态组件
class Header extends Component {

  // constructor(props) {
  //   super(props)
  //   this.handleInputFocus = this.handleInputFocus.bind(this)
  //   this.handleInputBlur = this.handleInputBlur.bind(this)

  // }

  // handleInputFocus() {
  //   this.setState({
  //     focused: true
  //   })
  // }

  // handleInputBlur() {
  //   this.setState({
  //     focused: false
  //   })
  // }

  // 搜索列表
  getListArea = () => {

    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseIn,
      handleMouseOut,
      handleChange
    } = this.props

    const newList = list.toJS();
    const pageList = []
    //有了数据再渲染
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    return !(focused || mouseIn) ? null : (
      <SearchInfo
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}>
        <SearchInfoTitle>热门搜索
        <SearchInfoSwitch
            onClick={() => {
              handleChange(page, totalPage, this.icon)
            }}>
            <i
              className="iconfont spin"
              ref={(icon) => {
                this.icon = icon
              }}>&#xe851;</i>
            换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
    )
  }

  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur
    } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <Link to="/login">
            <NavItem className='right'>登录</NavItem>
          </Link>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'>
              <NavSearch
                placeholder="搜索"
                className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe658;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button className='wrting'>
              <i className="iconfont">&#xe639;</i>
              写文章
          </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper >
    )
  }
}


const mapStateToProps = (state) => {
  // 把 store 中的数据映射到 props 上去
  return {
    // focused: state.focused
    // focused: state.header.focused
    // state 和 header 都是 immutable 对象
    //focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  // 提供一个可以获取到 dispatch 的映射
  return {

    handleInputFocus(list) {
      // 只发送一次 ajax
      (list.size === 0) && dispatch(actionCreator.getList())
      dispatch(actionCreator.serachFocus())
    },

    handleInputBlur() {
      dispatch(actionCreator.serachBlur())
    },

    handleMouseIn() {
      dispatch(actionCreator.mouseIn())
    },

    handleMouseOut() {
      dispatch(actionCreator.mouseOut())
    },

    handleChange(page, totalPage, spin) {
      // 动画
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      let pData = page < totalPage ?
        ++page : 1
      dispatch(actionCreator.changePage(pData))
    }
  }
}
// export default Header

export default connect(mapStateToProps, mapDispatchToProps)(Header)


/* 以下是 无状态组件
// const Header = (props) => {
//   return (
//     <HeaderWrapper>
//       <Logo href='/' />
//       <Nav>
//         <NavItem className='left active'>首页</NavItem>
//         <NavItem className='left'>下载App</NavItem>
//         <NavItem className='right'>
//           <i className="iconfont">&#xe636;</i>
//         </NavItem>
//         <NavItem className='right'>登录</NavItem>
//         <SearchWrapper>
//           <CSSTransition
//             in={props.focused}
//             timeout={200}
//             classNames='slide'>
//             <NavSearch
//               placeholder="搜索"
//               className={props.focused ? 'focused' : ''}
//               onFocus={props.handleInputFocus}
//               onBlur={props.handleInputBlur}>
//             </NavSearch>
//           </CSSTransition>
//           <i
//             className={props.focused ? 'focused iconfont' : 'iconfont'}>
//             &#xe658;</i>
//           {getListArea(props.focused)}
//         </SearchWrapper>
//         <Addition>
//           <Button className='wrting'>
//             <i className="iconfont">&#xe639;</i>
//             写文章
//           </Button>
//           <Button className='reg'>注册</Button>
//         </Addition>
//       </Nav>
//     </HeaderWrapper >
//   )
// }
*/


