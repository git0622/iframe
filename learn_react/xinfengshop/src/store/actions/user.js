import { login } from '../../api/api'
import { UPDATEUSERINFO } from '../action-types'
export function loginAction(params) {
  return function (dispatch) {
    return login(params).then(data => {
      console.log(data)
      dispatch({
        type: UPDATEUSERINFO, userInfo: {
          token: data.data,
          userName: "自己的名字",
          userLevel: 11
        }
      })
      return data
    })
  }
}