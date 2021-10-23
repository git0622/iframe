<template>
  <div>

    <Tab />
  </div>
</template>
<script>
// @ is an alias to /src
import myModel from "./model.vue";
import Tab from "./components/tab/index.vue";
export default {
  name: "XXX",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    cancel() {
      this.show = false;
    },
  },
  components: {
    myModel,
    Tab,
  },
};
</script>
<style lang="less">
</style>