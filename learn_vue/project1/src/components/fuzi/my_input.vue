<template>
  <div>
    自己的input
    <input
      type="text"
      :placeholder='placeholder123'
      :value='modelValue'
      @input='fn'
    >
    {{aaa}}{{www}}
    <van-button
      type="primary"
      v-bind='$attrs'
    >主要按钮</van-button>
  </div>
</template>
<script>
// @ is an alias to /src
/* 
  组件上的v-model  
  2.0  使用是 :value          @input
  3.0  使用是 :modelValue     @update:modelValue
  主题逻辑 2和3是一样的

*/
export default {
  props: ["placeholder123", "modelValue", "aaa", "www"],
  inject: ["zzz"],
  data() {
    return {};
  },
  methods: {
    fn(e) {
      console.log(this);
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style lang="less">
</style>