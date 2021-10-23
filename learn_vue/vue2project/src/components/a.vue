<template>
  <div>
    aaaaaaaaaaaaaaaaa
    <router-view></router-view>
    <button @click="go">异步去about</button>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query); // query传参的获取方式
    console.log(this.$route.params); // 路径传参的获取方式
    // 方式地址栏中的字符 刷新的时候 不会改变 ； 除非JS执行重置
  },
  methods: {
    go() {
      setTimeout(() => {
        this.$router.push("/about");
        this.$router.replace("/about"); // 这两个方法的参数等同于router-link的to属性的值
        // push会新增一个历史记录  replace只是把当前路径进行了一个替换 不会新增历史记录
        // this.$router.go(3);
        // this.$router.back();
      }, 1000);
    },
  },
  watch: {
    $route: function (val) {
      console.log(val);
    },
  },
  components: {},
};
</script>
<style lang="less">
</style>