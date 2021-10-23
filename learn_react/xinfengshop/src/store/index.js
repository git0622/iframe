import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/countReducer'
import { userReducer } from './reducers/user'
let rootReducer = combineReducers({
  A: countReducer,
  B: userReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store