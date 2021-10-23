import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './reducers/reducers'
import BReducer from './reducers/B_reducer'
import thunk from 'redux-thunk'
//  thunk 中间件的作用： 就是可以让dispatch接受一个函数了；原生的dispatch只能接受普通action

// combineReducers 合并reducer
let rootReducer = combineReducers({
  A: reducer,
  B: BReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store