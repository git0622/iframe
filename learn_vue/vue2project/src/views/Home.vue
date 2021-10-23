<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <button @click='fn'>click</button>
    <HelloWorld
      v-if='flag'
      msg="Welcome to Your Vue.js App"
      qqq='123'
    />
    <h1>{{$store.state.AA.Acount}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import loading from "./loading.vue";

function load(p, delay, loadingComp) {
  return {
    data() {
      return {
        loading: true,
        content: null,
      };
    },
    created() {
      setTimeout(() => {
        p.then((data) => {
          // data 对应的事import的执行结果
          this.loading = false;
          this.content = data.default;
        });
      }, delay);
    },
    // props: ["msg"],
    render(h) {
      return h("div", { class: "box" }, [
        this.loading
          ? h(loadingComp)
          : h(this.content, {
              props: this.$attrs,
              on: this.$listeners,
            }),
      ]);
    },
  };
}

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // HelloWorld: () =>
    //   import(/*webpackChunkName:"helloworld"*/ "@/components/HelloWorld.vue"),
    // HelloWorld: () => ({
    //   component: import(
    //     /*webpackChunkName:"helloworld"*/ "@/components/HelloWorld.vue"
    //   ),
    //   loading: loading,
    // }),
    HelloWorld: load(
      import(/*webpackChunkName:"helloworld"*/ "@/components/HelloWorld.vue"),
      3000,
      loading
    ),
  },
  data() {
    return {
      flag: false,
    };
  },
  created() {},
  methods: {
    fn() {
      this.flag = true;
    },
  },
};
</script>
