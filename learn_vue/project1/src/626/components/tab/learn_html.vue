<template>
  <div>
    恭喜你学会了html
    <input
      type="text"
      v-model='name'
    >
  </div>
</template>
<script>
export default {
  name: "html123",
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  data() {
    return {
      name: "zhufeng",
    };
  },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  mounted() {
    console.log("html组件 的 mounted");
  },
  activated() {
    console.log("actived");
  },
  deactivated() {
    console.log("deactivated");
  },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
  // beforeUnmount() {
  //   console.log("beforeUnmount");
  // },
  // unmounted() {
  //   console.log("unmounted");
  // },
};
</script>


<style lang="scss" scoped>
</style>