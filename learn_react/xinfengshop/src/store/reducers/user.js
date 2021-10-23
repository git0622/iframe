import { UPDATEUSERINFO } from '../action-types'
let str = localStorage.getItem("xinfengshangchengInfo")
let initState = str ? JSON.parse(str) : {
  name: "珠峰",
  age: 222,
  level: 111
}
export function userReducer(state = initState, action) {
  if (action.type == UPDATEUSERINFO) {
    let obj = {
      ...state,
      ...action.userInfo
    }
    localStorage.setItem("xinfengshangchengInfo", JSON.stringify(obj))
    return obj
  } else {
    return {
      ...state
    }
  }
}