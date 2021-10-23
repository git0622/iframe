import { COUNTADD, COUNTMINUS } from '../action-types'
let initState = {
  count: 100,
  type: "偶数"
}

function CountReducer(state = initState, action) {
  switch (action.type) {
    case COUNTADD:
      return {
        count: state.count + action.num,
        type: (state.count + action.num) % 2 ? "奇数" : "偶数"
      }
    case COUNTMINUS:
      return {
        count: state.count - action.num,
        type: (state.count - action.num) % 2 ? "奇数" : "偶数"
      }
    default:
      return {
        ...state
      }
  }
}

export default CountReducer