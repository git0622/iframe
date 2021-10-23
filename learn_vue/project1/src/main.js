import { createApp, h } from 'vue'
import App from './App.vue' // 这类。vue文件 最终都会被vue-loader 编译成对应的css js html
import './registerServiceWorker'
import { defineCom } from './common/index'
import store from './store'

let app = createApp(App);
app.config.globalProperties.$ajax = {}
app.mixin({
  created() {
    console.log("vue3的全局混入 created")
  },
  methods: {
    qqq() { }
  },
})
app.use({
  install(app, options) {
    console.log(app)
    app.component('hh', {
      render() {
        return h('div', {}, [h('h1', {}, 'hh插件'), h('h2', {}, "hh插件")])
      }
    })
  }
})
app.use(store)

defineCom(app)
/*
  import Vue from 'vue
  import App from './App.vue'

  new Vue({
    render:h=>h(App)
  }).$mount('#app)

*/
/*
  Vue.component(组件名字，{组件配置})


*/



app.mount('#app')