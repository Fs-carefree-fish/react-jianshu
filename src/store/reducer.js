// const defaultState = {
//   focused: false
// }

// export default (state = defaultState, action) => {
//   if (action.type === 'search_focus') {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.focused = true
//     return newState
//   }
//   if (action.type === 'search_blur') {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.focused = false
//     return newState
//   }
//   return state
// }

import { reducer as HeaderReducer } from '../common/Header/store'
import { reducer as HomeReducer } from '../pages/home/store'
import { reducer as DetailReducer } from '../pages/detail/store'
// import { combineReducers } from 'redux'
// 调用 redux-immutable 的 combineReducers 生成 不可变对象 
import { combineReducers } from 'redux-immutable'

const reducer = combineReducers({
  // 用于合成 reducer 
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer
})

export default reducer