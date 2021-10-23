<template>
  <div>
    <input
      type="text"
      v-model='todo'
      @keyup.enter="add"
    >
    <ul>
      <li v-for='item in list'>{{item.text}} <button @click="del(item)">X</button></li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      todo: "",
      list: [{ id: Math.random(), text: "hello" }],
    };
  },
  methods: {
    add() {
      this.list.unshift({
        id: Math.random(),
        text: this.todo,
      });
      this.todo = "";
    },
    del(item) {
      this.list = this.list.filter((val) => val.id != item.id);
    },
  },
};
</script>
<style lang="less">
</style>