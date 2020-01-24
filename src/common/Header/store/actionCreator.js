import * as actionType from './actionType'

import http from 'axios'

const headerList = (data) => ({
  type: actionType.GET_LIST,
  data: data,
  totalPage: Math.ceil(data.length / 10)
})

export const serachFocus = () => ({
  type: actionType.SEARCH_FOCUS
})

export const serachBlur = () => ({
  type: actionType.SEARCH_BLUR
})

export const mouseIn = () => ({
  type: actionType.MOUSE_IN
})

export const mouseOut = () => ({
  type: actionType.MOUSE_OUT
})

export const changePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page
})

export const getList = () => {
  // 这个方法可以拿到 dispatch 
  return (dispatch) => {
    //console.log(`执行getList方法`)
    http.get('/api/headerList.json')
      .then(
        (res) => {
          dispatch(headerList(res.data.data))
        })
      .catch((e) => {
        console.log(e)
      })
  }
}