import { COUNTADD, COUNTMINUS } from '../action-types'
export function add(n) {
  return { type: COUNTADD, num: n }
}

export function minus(n) {
  return function (dispatch, getState) {
    setTimeout(() => {
      dispatch({ type: COUNTMINUS, num: n })
    }, 2000);
  }
}