<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about?q123&w=234234">About</router-link>
      <router-link :to="{path:'/about',query:{q:123,w:35}}">About</router-link>
      <router-link :to="{name:'About',query:{q:123,w:356767}}">About</router-link>
      <router-link to="/a/123">home/a</router-link>
      <router-link :to="{name:'AAAAA',params:{qq:6666}}">home/a</router-link>
      <button @click='tt'>去a</button>
    </div>
    <router-view />
    <!-- <todo :list='[111,2222,333,444]'></todo> -->
    <!-- <ul v-color='"red"'>
      <li
        v-for='(item,index) in ary'
        :key='index'
      >
        <input type="checkbox">
        {{item}}
        <button
          @click=del(index)
          v-pression='2'
        >X</button>
      </li>
    </ul>
    <input
      type="text"
      v-focus123
      v-model='name'
    >

    <input
      type="text"
      v-model.number='num1'
    >
    <input
      type="text"
      v-model.number='num2'
    >
    <h2>{{he()}}</h2>
    <h2>{{$store.getters.countType}}{{count}}</h2>
    <button @click='changeCount'>+</button> -->
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapActions } from "./store/myvuex";
export default {
  data() {
    return {
      ary: [
        { val: 111, s: true },
        { val: 222, s: false },
        { val: 333, s: false },
        { val: 444, s: false },
      ],
      num1: 0,
      num2: 0,
      name: "珠峰",
    };
  },
  updated() {
    console.log("组件更新了");
  },
  created() {
    console.log(this);
    // localStorage.setItem("qqqqq", 3);
    // setTimeout(() => {
    //   localStorage.setItem("qqqqq", 0);
    //   this.$forceUpdate();
    // }, 3000);
  },
  methods: {
    tt() {
      this.$router.push({ name: "AAAAA", params: { qq: 12345 } });
    },
    del(n) {
      this.ary.splice(n, 1);
      this.add = 100;
    },
    he() {
      console.log("methods");
      return this.num1 + this.num2;
    },
    // fn() {
    //   this.$store.dispatch("changeCount", { num: 5 });
    // },
    ...mapActions(["changeCount"]),
  },
  computed: {
    ...mapState(["count"]),
    // count(){
    //   return this.$store.state.count
    // }
    // add() {
    //   // 只要依赖不发生改变 那么 当这个函数就不会执行 模板中使用的变量会直接使用上一次的计算结果
    //   // 依赖 就是指当前函数用同步使用的vue中的变量
    //   console.log("computed");
    //   return this.num1 + this.num2;
    // },
    add: {
      // 当外界给add这个计算属性赋值的时候 才会用到set函数
      // 计算属性中的属性名 不能是已经存在的vue变量
      // 计算属性最终也会被挂载到到当前实例上； props data methods computed
      get() {
        // 这里的num1,num2都有一个dep []
        // 在这个位置用的时候用 会触发他们get
        // 触发get的时候 会把当前add的watcher实例存一个到num1和num2对应的dep中
        //  当我们去更新num1或者num2的时候 就会触发他们各自的notify
        // 然后触发 dep中的notify 然后执行所有watcher的update
        return this.num1 + this.num2;
      },
      set(val) {
        console.log(val);
        this.num1 = 50;
        this.num2 = 50;
      },
    },
    /* 
    
      计算属性的原理：
        初始化的时候 会执行一个 initComputed函数去初始化所有的计算属性
        这个函数执行的时候 给每一个计算属性都添加了一个Watcher实例
        这些watcher都存储到了 实例的_computedWatchers这个对象中
        然后 通过 defineComputed 函数 创建一个新的getter函数这个getter函数
        是通过createComputedGetter 返回的
        然后把这写计算属性挨个绑定到了当前实例上

        createComputedGetter 返回的getter 会根据对应watcher实例
        的dirty属性来决定 使用这个属性时候应该重新计算新值还是继续使用老值
        
        这个dirty属性是 Watcher创造的一个属性 初始的是一个true

        当页面初次渲染的时候需要使用某个计算属性 这时会触发createComputedGetter 返回的getter
        由于dirty是个true所以会触发watcher的evaluate这个函数

        evaluate 函数会跟用户编写的get来更新 watcher上的value属性
        并且把dirty置为false


        那么以后当页面更新的时候 就会再去调用对应的计算属性， 这时再次触发
        触发createComputedGetter 返回的getter，
        这个时候 watcher的dirty已经变成了false 所以不会再去触发evaluate函数
        那么也就会触发用户编写的get函数，得到的值是 watcher的value

        当计算属性的依赖更新(会触发 对应以来的watcher)的时候 会触发这个计算属性的watcher对应的update方法
        这个方法 又重新把dirty制成了true,当后续再次使用这个计算属性的时候
        dirty已经变成了true 会再次触发evaluate函数 ，也就会再次触发用户的get函数



     watcher的原理： 
      通过 new Watcher 创造了一个watcher实例
      当监听的数据更新的时候 会触发 update方法 然后执行 queueWatcher这个方法
         queueWatcher这个方法 就是把对应的wacher实例存入到一个queue 数组中 

         然后通过 nextTick执行flushSchedulerQueue 
         flushSchedulerQueue 执行的时候 会把队列中所有watcher实例的 run方法执行

         run 方法执行的时候 会执行 用户传进来的cb 也就是侦听属性对应的回调函数
    */
  },
  watch: {
    //侦听的都是已经存在的属性  props data  computed
    add(newVal, oldVal) {
      // 只要add 发生改变 那么就会触发这个回调函数
      //  若 add 是一个引用数据类型 当我们修改里边的内筒的时候 不会触发这个回调念书
    },
    add: {
      deep: true,
      immediate: true, // 默认 初始加载的时候不会触发watch的回调函数，有这个属性之后，就会触发回调函数
      handler() {
        // 一般当我们需要监听引用数据类型的内部改变的是  需要使用deep
        // 这个时候 newVal和oldVal 是一样的
      },
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
