import { createStore } from 'vuex'

let store = createStore({
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    changeCount(state, option) {
      state.count += option
    }
  }
})

export default store