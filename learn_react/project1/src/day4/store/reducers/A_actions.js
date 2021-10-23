import * as types from '../action-types'
export function addName() {
  return { type: types.ADDNAME }
}
export function changeName(name) {
  return { type: types.CHANGENAME, name: name }
}
export function changeAge(age) {
  return { type: types.CHANGEAGE, age123: age }
}
export function changeCount(n) {
  // setTimeout(() => {
  //   return { type: types.CHANGECOUNT, num: n }
  // }, 2000);
  return function (dispatch) {

    setTimeout(() => {
      dispatch({ type: types.CHANGECOUNT, num: n })
    }, 2000);
  }

}