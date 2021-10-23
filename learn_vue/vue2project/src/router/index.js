import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueRouter from './myRouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',// 路径传参的时候才需要
    component: Home,
    children: [
      {
        path: '/a/:qq',
        //  若选用路径传参的时候 则需要再映射表中dingyipath的时候 添加对应的占位符
        // 占位符的名字就以后参数的属性名
        name: "AAAAA",
        component: () => import(/* webpackChunkName: "home.a" */'../components/a.vue'),
        children: [
          {
            path: '/a/:qq/ddd',
            component: { render(h) { return h('h1', {}, 'ddd') } }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  //  hash 全部由前端控制
  //  history默认 需要后端配置， 当请求到我们前端自己设置的路径的时候不要调到404 而是返回我们当前项目的首页
  //  hash 监听的时间是 hashchange
  //  history 监听的 是 popstate事件和pushState,replaceState
  base: process.env.BASE_URL,
  routes
})

export default router
