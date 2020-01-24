import http from 'axios'
import * as  actionType from './actionType'

const Detail = (title, content) => {
  return {
    type: actionType.CHANGE_DETAIL,
    title,
    content
  }
}


export const getDetail = (id) => {
  //console.log(id)
  return (dispatch) => {
    http.get('/api/detail.json?id=' + id)
      .then((res) => {
        dispatch(Detail(res.data.data.tatle, res.data.data.content))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

