<template>
  <div>

    <button @click='show_time = true'>{{new Date(currentDate).toLocaleString()}}</button>
    <van-popup
      v-model:show="show_time"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        v-bind='$attrs'
        title="选择年月"
        @confirm='confirm_time'
        @cancel="cancel_time"
      />
    </van-popup>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  setup(props, ctx) {
    let state = reactive({
      currentDate: new Date(),
      show_time: false,
    });

    const confirm_time = () => {
      state.show_time = false;
      ctx.emit("timeSelect", state.currentDate);
    };
    const cancel_time = () => {
      state.show_time = false;
    };
    return {
      ...toRefs(state),
      confirm_time,
      cancel_time,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>