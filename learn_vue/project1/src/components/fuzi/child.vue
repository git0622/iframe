<template>
  <div>
    子组件{{qq}}

    <button @click='fn'>换名字</button>
  </div>
</template>
<script>
import { warn } from "@vue/runtime-core";
// @ is an alias to /src
export default {
  // props: ["qq"],
  props: {
    qq: {
      type: [Number, String], // 限制传进来的参数的类型
      required: true, // 代表当前这个参数是必须传递的
      // default: 100,// 若是一个引用数据类型 则写成一个回调函数的方式
      // default() {
      //   return [];
      // },
      validator(val) {
        if (val.length > 1) return true;

        console.warn("长度不能小于2");
        return false;
      },
    },
  },
  data() {
    return {
      childName: "子组件",
    };
  },
  methods: {
    fn() {
      // console.log(this.qq, this.childName);
      // this.qq = this.childName;
      this.$emit("changqq", this.childName);
    },
  },
};
</script>
<style lang="less">
</style>