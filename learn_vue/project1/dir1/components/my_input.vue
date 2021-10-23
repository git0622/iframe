<template>
  <div>
    自己的input
    <input
      type="text"
      :placeholder='placeholder123'
      :value='modelValue'
      @input='fn'
    >
  </div>
</template>

<script>
export default {
  props: ["placeholder123", "modelValue"],
  setup(props, ctx) {
    console.log(props, ctx);
    const fn = (e) => {
      ctx.emit("update:modelValue", e.target.value);
    };
    return {
      fn,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>