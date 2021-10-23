import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import HasNav from '../views/hasNav.vue'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'HasNav',
    redirect: '/home',
    component: HasNav,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/data',
        name: "tongji",
        component: () => import(/*webpackChunkName:"tongji" */'@/views/data.vue'),
        beforeEnter(to, from) {
          console.log(to)
        },
        // children:[
        //   {
        //     path:'/data/qqq'
        //   }
        // ]
      },
      {
        path: '/user',
        name: "user",
        component: () => import(/*webpackChunkName:"user" */'@/views/user.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    componnent: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-class'
})
router.beforeEach((to, from) => {
  console.log(to, from)
  let str = localStorage.getItem('jz_vuex_state')
  let obj = str ? JSON.parse(str) : {}
  if (obj.token) {
    return true
  } else if (to.path != '/login') {
    return '/login'
  }
  return true
})

export default router
