let _Vue = null;
function install(Vue) {
  console.log(arguments)
  _Vue = Vue;
  Vue.mixin({
    /* 
      beforeCreate 这个钩子函数的执行顺序是 
      父 -》 子 -》 孙 -》重孙 -》 。。。
      父组件中的$options 中有 store实例
      父组件的beforeCreate 执行的时候 我们把$options 中有 store实例变成了
      父组件的$store属性

      然后执行子组件的beforeCreate，这时他的父组件身上有$store
      然后 然后再自己身上添加了一个$store属性 对应的就是说父组件的$store

      然后执行孙组件的beforeCreate，这时他的父组件（子组件）身上有$store
      然后 然后再自己身上添加了一个$store属性 对应的就是说父组件的$store

    */
    beforeCreate() {
      if (this.$options.store) {
        // 证明这个钩子是在根组件中执行的
        this.$store = this.$options.store
      } else if (this.$parent && this.$parent.$store) {
        // 证明这时的这个钩子是根组件的后代组件
        this.$store = this.$parent.$store
      }
    },
  })
}
class Store {
  constructor(options) {
    //  options:State mutations actions  getters
    // this.state = options.state;
    let vm = new _Vue({
      data() {
        return {
          state: options.state
        }
      }
    })
    this.state = vm.state;
    //  处理mutations
    this.mutations = {};
    let mutations = options.mutations || {};
    Object.keys(mutations).forEach(key => {
      this.mutations[key] = (option) => {
        mutations[key].call(this, this.state, option)
        // mutations[key](this.state, option)
      }
      // this.mutations[key] = mutations[key].bind(this, this.state)
    })

    // 处理actions
    this._actions = Object.create(null)
    let actions = options.actions || {}
    Object.keys(actions).forEach(key => {
      this._actions[key] = (option) => {
        actions[key].call(this, this, option)
        // mutations[key](this.state, option)
      }
      // this.mutations[key] = mutations[key].bind(this, this.state)
    })
    // 处理getters
    this.getters = Object.create(null)
    let getters = options.getters || {};
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })


  }
  commit(type, option) {
    console.log(type, option)
    return this.mutations[type](option)
  }
  dispatch(type, option) {
    console.log('diaptch')
    return this._actions[type](option)
  }
}
export default {
  install,
  Store
}

export function mapState(ary) {
  let obj = {};
  ary.forEach(key => {
    obj[key] = function () {
      return this.$store.state[key]
    }
  })

  return obj
}
export function mapActions(ary) {
  let res = {};
  ary.forEach(key => {
    res[key] = function (...arg) {
      this.$store.dispatch(key, ...arg);
    }
  })

  return res
}
//  mapMutations  mapGetters