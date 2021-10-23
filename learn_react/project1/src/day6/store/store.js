// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore, combineReducers, applyMiddleware } from './myredux'
// import thunk from 'redux-thunk'
import { thunk, qqq } from './myredux'

function CountReducer(state, action) {
  console.log('CountReducer')
  state = state || {
    count: 100,
    type: "偶数"
  }
  let res;
  switch (action.type) {
    case 'ADD':
      res = state.count + action.n
      return {
        ...state,
        count: res,
        type: res % 2 ? '奇数' : '偶数'
      }
    case 'MINUS':
      res = state.count - action.n
      return {
        ...state,
        count: res,
        type: res % 2 ? '奇数' : '偶数'
      }
    default:
      return {
        ...state
      }
  }
}

function ColorReducer(state, action) {
  console.log('ColorReducer')
  state = state || { color: 'red' }
  if (action.type == 'CHANGECOLOR') {
    return {
      color: action.col
    }
  } else {
    return {
      ...state
    }
  }
}
let rootReducer = combineReducers({
  A: CountReducer,
  B: ColorReducer
})

let store = createStore(rootReducer, applyMiddleware(qqq, thunk))
// let store = createStore(rootReducer)
console.log(store)

export default store