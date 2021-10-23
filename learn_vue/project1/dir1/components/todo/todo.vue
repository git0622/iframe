<template>
  <div>
    <input
      type="text"
      v-model='todo'
      @keyup.enter="add"
    >
    <ul>
      <li v-for='item in list'>{{item.text}} <button @click='del(item)'>X</button></li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const obj = reactive({
      todo: "",
      list: [{ id: Math.random(), text: "hello" }],
    });

    const add = () => {
      obj.list.unshift({
        id: Math.random(),
        text: obj.todo,
      });
      obj.todo = "";
    };
    const del = (item) => {
      obj.list = obj.list.filter((val) => val.id !== item.id);
    };
    return {
      ...toRefs(obj),
      add,
      del,
    };
  },
};
</script>

<style lang="less" scoped>
</style>