
import c1 from '@/common/c1.vue'
import { h } from 'vue'
export function defineCom(app) {
  app.component('my-com', {
    // 创造一个全局组件  在任何组件当中都能直接使用的一种组件
    //  当我们去封装一些复用性的组件的时候 会考虑使用全局组件
    name: "myself-com",
    data() { return { q: 123 } },
    render() {
      // vue的jsx写法  //  h  createElement
      return h('h1', {}, 'hello world')
    }
  })
  app.component('c1', c1)

}