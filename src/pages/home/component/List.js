import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actionCreator } from '../store'


// class List extends Component {
class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props
    return (
      <>
        {
          articleList.map((item, idx) => {
            return (
              <Link key={idx} to={"/detail/" + item.get('id')}>
             {/* <Link key={idx} to={"/detail/?id=" + item.get('id')}> */}
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc"> {item.get("desc")}</p>
                  </ListInfo>
                  <img
                    className="list-pic"
                    alt="listPic"
                    src={item.get("imgUrl")} />
                </ListItem>
              </Link>)
          })
        }
        <LoadMore onClick={getMoreList}>加载更多</LoadMore>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  // 提供一个可以获取到 dispatch 的映射
  return {
    getMoreList() {
      dispatch(actionCreator.getMoreList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)