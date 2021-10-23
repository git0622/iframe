import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import todo from './plugins/todo/index.js'
Vue.use(todo)

Vue.mixin({
  //  这个对象就是一个普通的（组件配置对象）；全局混入就是把当前这个对象混入到每一个组建的配置对象中
  created() {
    console.log("混入的 created")
  }
})

Vue.config.productionTip = false

Vue.directive('focus123', {
  inserted: function (el) {
    el.focus()
  }
})
// Vue.directive('color', {
//   inserted: function (el, { value }) {
//     el.style.color = value || 'blue'
//   }
// })

Vue.directive('color', function (el, { value }) {
  el.style.color = value || 'blue'
})

Vue.directive('pression', {
  // 按钮级别的权限展示问题
  componentUpdated(el, { value }) {

    let userLevel = localStorage.getItem('qqqqq');
    // console.log(66666)
    if (userLevel < value) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
})

Vue.prototype.$ajax = {}





new Vue({
  created() {
    console.log(this)
  },
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
