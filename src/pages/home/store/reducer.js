import * as actionType from './actionType'

import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommedUrl: [],
  BackTopShow: false
})


export default (state = defaultState, action) => {

  switch (action.type) {
    case actionType.GET_HOME_DATA:
      // const data = fromJS(action)
      // return state.merge({
      //   'topicList': data.get('topicList'),
      //   'articleList': data.get('articleList'),
      //   'recommedUrl': data.get('recommedUrl')
      // })
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommedUrl': fromJS(action.recommedUrl)
      })
    case actionType.GET_MORE_LIST:
      const list = fromJS(action.list)
      return state.set('articleList', state.get('articleList').concat(list))
    case actionType.SHOW_TOP:
      return state.set('BackTopShow', action.flag)
    default: return state
  }
}