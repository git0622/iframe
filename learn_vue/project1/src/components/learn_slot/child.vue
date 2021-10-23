<template>
  <ul @click='fn'>
    <li v-for='item in data'>
      <header>
        <slot
          name='please_header'
          q='123'
        >
          默认的头部
        </slot>
      </header>
      <main>
        <slot
          :qqq="item"
          w='123'
          e='234'
        ></slot>
      </main>
      <footer></footer>

    </li>
  </ul>
</template>
<script>
// @ is an alias to /src
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    fn() {
      console.log(this.$slots);
    },
  },
  components: {},
};
</script>
<style lang="less">
</style>