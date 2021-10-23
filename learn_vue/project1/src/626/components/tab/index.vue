<template>
  <div>
    <div class="btn_box">
      <button
        v-for='tab in tabs'
        @click='change(tab)'
      >{{tab}}</button>
    </div>
    <!-- <LearnHTML v-if='current=="html123"' />
    <LearnCSS v-show='current=="css"' />
    <LearnJS v-show='current=="js"' /> -->
    <!-- <keep-alive :exclude="['css']"> -->
    <!-- <keep-alive :include='/^js/'> -->
    <keep-alive :include="['js','html123']">
      <component :is="current"></component>
    </keep-alive>

  </div>
</template>
<script>
// @ is an alias to /src
// import LearnHTML from "./learn_html.vue";
// import LearnCSS from "./learn_css.vue";
// import LearnJS from "./learn_js.vue";
import { defineAsyncComponent } from "vue";
// let obj = {
//   html: LearnHTML,
//   css: LearnCSS,
//   js: LearnJS,
// };
// options api;    composition API(组合式API)
export default {
  name: "XXX",
  data() {
    return {
      tabs: ["html123", "css", "js"],
      current: "html123",
      // componentId: LearnHTML,
    };
  },
  methods: {
    change(tab) {
      console.log(tab);
      this.current = tab;

      // this.componentId = obj[tab];
      // console.log(this.componentId);
    },
  },

  components: {
    html123: defineAsyncComponent(() =>
      import(/*webpackChunkName:"html"*/ "./learn_html.vue")
    ),
    css: defineAsyncComponent(() =>
      import(/*webpackChunkName:"css"*/ "./learn_css.vue")
    ),
    js: defineAsyncComponent(() =>
      import(/*webpackChunkName:"js"*/ "./learn_js.vue")
    ),
  },
};
</script>
<style lang="less">
</style>