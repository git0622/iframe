import * as types from '../action-types'
// import {ADDNAME,CHANGEAGE} from '../action-types'
let initState = {
  name: "珠峰",
  age: 12,
  count: 100
}
export function reducer(state, action) {
  console.log("A的reducer")
  // debugger
  state = state || initState
  switch (action.type) {
    case types.ADDNAME:
      return {
        ...state,
        name: "ADD——珠峰培训"
      }
    case types.CHANGENAME:
      return {
        ...state,
        name: action.name
      }
    case types.CHANGEAGE:
      return {
        ...state,
        age: action.age123
      }
    case types.CHANGECOUNT:
      return {
        ...state,
        count: state.count + action.num
      }
    default:
      return {
        ...state
      }
  }
}