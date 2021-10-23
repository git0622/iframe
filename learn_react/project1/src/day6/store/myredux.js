export function createStore(reducer, fn) {
  let state;// 就是用来存储state的
  let cb = [];
  function getState() {
    return { ...state }
  }
  function dispatch(action) {
    console.log('dispatch', action)
    state = reducer(state, action)// reducer的执行结果是我们更新之后的state
    console.log(state)
    cb.forEach(f => { f() })
    return action
  }
  dispatch({ type: "@@types-qqqq" })

  function subscribe(f) {
    console.log('subscribe')
    cb.push(f)
    console.log(cb)
    return function () {
      // 这个函数一致性 就会把对应添加的回调函数移除
      cb = cb.filter(v => v !== f)
    }
  }

  if (typeof fn == 'function') {
    // fn(createStore) 返回值是新的createStore
    let newCreateStore = fn(createStore);
    return newCreateStore(reducer)
  }
  return {
    dispatch,
    getState,
    subscribe
  }
}


export function combineReducers(obj) {

  return function reducer(rootState, action) {
    rootState = rootState || {}
    // {A:{},B:{}}
    Object.keys(obj).forEach(key => {
      rootState[key] = obj[key](rootState[key], action)
    })
    return rootState
  }
}

export function thunk(store) {
  let { dispatch, getState } = store
  return function (next) {
    // store.dispatch的时候 调用的是newDispatch
    return function newDispatch(action) {
      if (typeof action == 'function') {
        return action(dispatch, getState)
      }
      return next(action)
    }
  }
}
export const qqq = store => dispatch => action => {
  console.log("qqq中间件")
  return dispatch(action)
}
function compose(...fns) {
  let first = fns.shift()
  return function (...args) {
    return fns.reduce((prev, cur) => {
      return cur(prev)
    }, first(...args))

  }
}
export function applyMiddleware(...middles) {
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer)// store:{dispatch,getState,subscribe}
      let temps = middles.map(middle => middle(store))
      // let newDispatchs = temps.map(temp => temp(store.dispatch))
      // [f1,f2,f3]
      let newDispatchs = compose(...temps)(store.dispatch)
      return {
        ...store,
        // dispatch: function () {
        //   console.log("applyMiddleware创造的新的dispatch")
        // }
        // dispatch(action) {
        //   let resFn = compose(...newDispatchs)
        //   return resFn(action)
        // }
        dispatch: newDispatchs
      }
    }
  }
}