import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'
import List from './component/List'
import Recommed from './component/Recommed'
import Topic from './component/Topic'
import Writer from './component/Writer'


import { connect } from 'react-redux'
import { actionCreator } from './store'
// import { actionType } from './store'


//class Home extends Component {
class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.topShow)
  }

  componentDidMount() {
    const { getHomeInfo } = this.props
    getHomeInfo()
    this.bindEvent()
  }

  render() {
    const homePic = 'https://upload.jianshu.io/admin_banners/web_images/4876/a6157b042b15d25667e0ecab9fa130a054cbf1b6.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    return (
      <HomeWrapper>
        <HomeLeft >
          <img
            className="banner-img"
            alt="首页图"
            src={homePic} />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight >
          <Recommed />
          <Writer />
        </HomeRight>
        {this.props.BackTopShow ? <BackTop onClick={this.handleScrollTop}> 回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    BackTopShow: state.getIn(['home', 'BackTopShow'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeInfo() {
      dispatch(actionCreator.getHomeData())
    },
    topShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreator.toggleTopShow(true))
      } else {
        dispatch(actionCreator.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)


