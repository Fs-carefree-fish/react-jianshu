import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { TopicWrapper, TopicItem } from '../style'

// class Topic extends Component {
class Topic extends PureComponent {

  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return <TopicItem key={item.get('id')}>
              <img
                alt="topicItem"
                className="topic-img"
                src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

// const mapDispatchToProps = (dispatch) => {
//   // 提供一个可以获取到 dispatch 的映射
//   return {
//     null
//   }
// }
export default connect(mapStateToProps, null)(Topic)
