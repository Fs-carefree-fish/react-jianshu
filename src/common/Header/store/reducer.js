import * as actionType from './actionType'


// 引入 immutable 
// import { Map, List } from 'immutable'
import { fromJS } from 'immutable'

//将对象变成 immutable 对象 调用 get 和 set 方法
const defaultState = fromJS({
  focused: false,
  // list 是复杂数据类型 也需要是一个 immutable
  mouseIn: false,
  list: [],
  page: 1,//定义当前页数
  totalPage: 1//定义总页数
})


export default (state = defaultState, action) => {

  switch (action.type) {

    case actionType.SEARCH_FOCUS:
      return state.set('focused', true)

    case actionType.SEARCH_BLUR:
      return state.set('focused', false)

    case actionType.MOUSE_IN:
      return state.set('mouseIn', true)

    case actionType.MOUSE_OUT:
      return state.set('mouseIn', false)

    case actionType.CHANGE_PAGE:
      return state.set('page', action.page)

    case actionType.GET_LIST:
      const list = fromJS(action.data)
      return state.merge({
        'list': list,
        'totalPage': action.totalPage
      })
    default: return state
  }

  /*  if (action.type === actionType.SEARCH_FOCUS) {
      // const newState = JSON.parse(JSON.stringify(state))
      // newState.focused = true
      // return newState
      // 调用 set 会返回新对象 代替深拷贝的操作
      // (ps:以上深拷贝只能拷贝一层 immutable 是多层深拷贝)
      return state.set('focused', true)
    }
  
    if (action.type === actionType.SEARCH_BLUR) {
      // const newState = JSON.parse(JSON.stringify(state))
      // newState.focused = false
      // return newState
      return state.set('focused', false)
    }
  
  
    if (action.type === actionType.GET_LIST) {
      //将 list 数据也变成 fromJs 对象
      const list = fromJS(action.data)
      //console.log(list)
      return state.set('list', list)
    }
    return state
    */
}