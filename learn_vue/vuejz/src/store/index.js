import { createStore } from 'vuex'
import { login, getTypeList } from "@/api/index.js";
let str = localStorage.getItem("jz_vuex_state");
let initState = str ? JSON.parse(str) : {
  token: '',
  typeList: []
};

const myPlugin = (store) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.setItem("jz_vuex_state", JSON.stringify(state))
  })
}


export default createStore({
  plugins: [myPlugin],
  state: initState,
  mutations: {
    updateToken(state, str) {
      state.token = str
    },
    getTypeList(state, list) {
      state.typeList = list
    }
  },
  actions: {
    updateToken(store, { username, password }) {
      return login(username, password).then(data => {
        store.commit('updateToken', data.data.token)
        return data
      })
    },
    getTypeList(store) {
      return getTypeList().then(data => {
        console.log(data)
        store.commit("getTypeList", data.data.list)
      })
    }
  },
  modules: {
  }
})
