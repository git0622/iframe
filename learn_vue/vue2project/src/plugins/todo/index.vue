<template>
  <div>
    <h1>todo插件</h1>
    <ul>
      <li v-for='item in list'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  props: ["list"],
  components: {},
};
</script>
<style lang="less">
</style>