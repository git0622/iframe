<template>
  <div>
    <!--这个router-view 用来展示/home  /user /data 这三个带有导航的组件 -->
    <h1>hasNav</h1>
    <router-view></router-view>
    <BotNav :list='navList'></BotNav>
  </div>
</template>

<script>
import BotNav from "@/components/botNav.vue";
import { reactive, toRefs } from "vue";
export default {
  components: { BotNav },
  setup() {
    let state = reactive({
      navList: [
        {
          text: "首页",
          url: "/home",
          iconName: "wap-home",
        },
        {
          text: "统计",
          url: "/data",
          iconName: "coupon",
        },
        {
          text: "我的",
          url: "/user",
          iconName: "manager",
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>