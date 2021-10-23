<template>
  <div>
    恭喜你学会了js
    <input
      type="text"
      v-model='age'
    >
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "js",
  setup(props) {
    let state = reactive({
      age: 12,
    });
    onMounted(() => {
      console.log("JS组件的vue3mounted");
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>