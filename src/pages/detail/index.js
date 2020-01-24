import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style.js'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Detail extends Component {

  componentDidMount() {
    const { getDetail } = this.props
    const { id } = this.props.match.params
    //const { search } = this.props.location
    //console.log(search)
    getDetail(id)

  }
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}>

          {/* <img src='https://upload-images.jianshu.io/upload_images/13089346-61ee051862f74de4.png' alt='detailImg' />
          <p>
            同时，成为谈写作、体育、健康&养生、运动&健身、散文5个官方专题推荐作者。
            由于排名上升的艰难，接下来的目标：两个月内打入前1000强。
            在简书8个半月的轨迹、写作历程如下：18年七月十日，注册入驻简书。
          </p>
          <p>
            同时，成为谈写作、体育、健康&养生、运动&健身、散文5个官方专题推荐作者。
            由于排名上升的艰难，接下来的目标：两个月内打入前1000强。
            在简书8个半月的轨迹、写作历程如下：18年七月十日，注册入驻简书。
          </p>
          <p>
            同时，成为谈写作、体育、健康&养生、运动&健身、散文5个官方专题推荐作者。
            由于排名上升的艰难，接下来的目标：两个月内打入前1000强。
            在简书8个半月的轨迹、写作历程如下：18年七月十日，注册入驻简书。
          </p> */}
        </Content>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreator.getDetail(id))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Detail)
