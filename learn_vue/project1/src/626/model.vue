<template>
  <button @click='isShow=true'>显示model</button>
  <teleport to='.boxqqq'>
    <div v-if='isShow'>
      弹框组件
      <button @click='cancel'>取消</button>
    </div>
  </teleport>

  <teleport to='.boxqqq'>
    <h1>和哈和</h1>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    cancel() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>