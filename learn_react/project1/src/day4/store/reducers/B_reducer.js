import * as types from '../action-types'
let initState = {
  list: [{ id: 123, text: '测试' }],
  title: "todo案例"
}
function BReducer(state = initState, action) {
  console.log("B的reducer")
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        list: [action.todo].concat(state.list)
      }
    case types.REMVOE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    default:
      return {
        ...state
      }
  }
}

export default BReducer