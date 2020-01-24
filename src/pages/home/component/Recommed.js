import React, { PureComponent } from 'react'
import { RecommedWrapper, RecommedItem } from '../style'
import { connect } from 'react-redux'

// class Recommed extends Component {
class Recommed extends PureComponent {

  render() {
    const { recommedUrl } = this.props
    return (
      <RecommedWrapper>

        {recommedUrl.map((item) => {
          return <RecommedItem
            key={item.get('id')}
            imgUrl={item.get('imgUrl')} />
        })}
      </RecommedWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommedUrl: state.getIn(['home', 'recommedUrl'])
  }
}

// const mapDispatchToProps = (dispatch) => {
//   // 提供一个可以获取到 dispatch 的映射
//   return {
//     null
//   }
// }
export default connect(mapStateToProps, null)(Recommed)
