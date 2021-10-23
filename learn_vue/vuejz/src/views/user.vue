<template>
  <div>
    用户也
    <button @click='fn'>获取路由</button>
    <router-link to="/aaa">aaaa</router-link>
    <router-link to="/data/bbb">bbbb</router-link>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

let obj = {
  "/aaa": () => import("@/views/detail.vue"),
  "/bbb": () => import("@/views/detail.vue"),
};
export default {
  setup() {
    let router = useRouter();
    let state = reactive({
      ary: [],
    });
    const fn = () => {
      setTimeout(() => {
        let list = [
          { path: "/aaa", name: "aaa", component: "/aaa" },
          {
            pname: "tongji",
            path: "bbb",
            name: "bbb",
            component: "/bbb",
          },
        ];
        list = list.map((item) => {
          // item.component = ()=>import(item.compponent);
          item.component = obj[item.component];
          return item;
        });
        console.log(list);
        state.ary = list;
        list.forEach((item) => {
          if (item.pname) {
            router.addRoute(item.pname, {
              path: item.path,
              name: item.name,
              component: item.component,
            });
          } else {
            router.addRoute(item);
          }
        });
      }, 2000);
    };
    return {
      fn,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>