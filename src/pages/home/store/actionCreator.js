import http from 'axios'
import * as actionType from './actionType'

const homeInfo = (data) => {
  return {
    type: actionType.GET_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommedUrl: data.recommedUrl
  }
}

const moreList = (list) => {
  return {
    type: actionType.GET_MORE_LIST,
    list
  }
}

const showFlag = (flag) => {
  return {
    type: actionType.SHOW_TOP,
    flag
  }
}

export const getHomeData = () => {
  return (dispatch) => {
    http.get('/api/home.json')
      .then((res) => {
        dispatch(homeInfo(res.data.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    http.get('/api/homeList.json')
      .then((res) => {
        //console.log(res.data)
        dispatch(moreList(res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export const toggleTopShow = (flag) => {
  return (dispatch) => {
    dispatch(showFlag(flag))
  }
}
