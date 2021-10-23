import Vue from 'vue'
// import Vuex from './myvuex'
import Vuex from 'vuex'
import A from './a'
import B from './b'
import C from './c'

Vue.use(Vuex)
function plugin(store) {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

let store = new Vuex.Store({
  modules: {
    AA: A, B, C
  },
  // plugins: [plugin],
  // state: {
  //   // 存放的是公用数据
  //   count: 100
  // },
  // mutations: {
  //   // 这里所有的方法都是为了修改state的
  //   // 调用这里的方法需要使用 commit(属性名，用户参数)  commit({type:属性名，qqq:用户参数})
  //   changeCount(state, options) {
  //     // state 就是上边的共用状态state; options 使用户在调用这个方法的时候 传递的参数
  //     //  this 是store实例
  //     // console.log(arguments)
  //     // setTimeout(() => {
  //     state.count += options.num
  //     console.log('changeCOunt 执行了', state.count)
  //     // }, 1000);
  //   }
  // },
  // actions: {
  //   // 通过dispatch调用
  //   changeCount(store, options) {
  //     setTimeout(() => {
  //       store.commit('changeCount', options)
  //     }, 3000);
  //   }
  // },
  // getters: {
  //   countType(state) {
  //     return state.count % 2 ? "奇数" : "偶数"
  //   }
  // }
})
console.log('store', store)

export default store
