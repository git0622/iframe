import todo from './index.vue'
export default {
  install(Vue) {
    console.log(arguments)
    Vue.component('todo', todo)
  }
}