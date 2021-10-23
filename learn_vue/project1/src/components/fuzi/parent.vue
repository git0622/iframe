<template>
  <div>
    <my-com />
    父组件66666
    <input
      type="text"
      v-model='name'
    >
    <Child
      :qq='name'
      @changqq='fn'
    />

    <el-input
      v-model="name"
      placeholder123="请输入内容"
      aaa='123'
      www='345'
      color='red'
    ></el-input>

    <el-input
      :modelValue='name'
      @update:modelValue='qqqq'
      placeholder123="请输入内容"
      ref='qqq'
    ></el-input>
  </div>
</template>
<script>
// @ is an alias to /src
/*  
  父传子 ： 自定义属性 + props
  子传父：  自定义事件 + $emit

*/
import Child from "./child.vue";
import myinp from "./my_input.vue";
export default {
  components: { Child, "el-input": myinp },
  inject: ["zzz"],
  data() {
    return {
      name: "珠峰",
    };
  },
  methods: {
    fn(val) {
      console.log(this.$refs.qqq);
      this.name = val;
    },
    qqqq(e) {
      this.name = e;
    },
  },
};
</script>
<style lang="less">
</style>