let _Vue;
class VueRouter {
  constructor(options) {
    let routes = options.routes || [];
    // routes 就是路由映射表
    this.routerMap = {};// {'/':HOme,'/about':About}
    routes.forEach(item => {
      this.routerMap[item.path] = item.component
    })
    // console.dir(_Vue)
    _Vue.util.defineReactive(this, "_route", "/2342")
    this._route = location.hash.slice(1);// '/' '/about
    window.onhashchange = () => {
      this._route = location.hash.slice(1)
      console.log(this._route)
    }
  }
}
function install123(Vue) {
  _Vue = Vue
  /* 
    这个install方法是给 Vue.use准备的
  
  */
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this.$router = this.$options.router
      } else if (this.$parent && this.$parent.$router) {
        this.$router = this.$parent.$router
      }
    },
  })
  Vue.component('router-link', {
    props: ['to'],
    render(h) {
      return h('a', {
        class: 'qqqq', attrs: {
          href: "#" + this.to
        }
      }, 'hahahaha')
    }
  })
  Vue.component('router-view', {
    render(h) {
      // 要渲染的是 路径对应的那个组件
      // return h('h2', { class: 'wwww' }, "呵呵呵呵呵")
      //  this 是router-view这个组件
      //  this.$router是 VueROuter实例
      // this.$router.routerMap 映射关系对象
      // this.$router._route 是当前页面的路由
      return h(this.$router.routerMap[this.$router._route])
    }
  })
}

VueRouter.install = install123;

export default VueRouter