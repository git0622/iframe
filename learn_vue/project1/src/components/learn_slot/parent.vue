<template>
  <div>
    <h1>父组件</h1>
    <child :data='ary'>
      <!-- v-slot:xxx  可以简写成 #xxx -->
      <template #please_header='{q}'>
        <h3>
          用户定义的头部{{q}}
        </h3>
      </template>
      <template #default='hhh'>
        <h1>
          {{hhh.qqq}}
        </h1>
      </template>
    </child>
  </div>
</template>
<script>
// @ is an alias to /src
import child from "./child.vue";
export default {
  components: {
    child,
  },
  data() {
    return {
      name: "zhufeng",
      ary: [111, 222, 333, 444],
    };
  },
};
</script>
<style lang="less">
</style>