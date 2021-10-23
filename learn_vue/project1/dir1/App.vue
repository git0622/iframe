<template>
  <el-input
    v-model="name"
    placeholder123="请输入内容"
    aaa='123'
    www='345'
  ></el-input>
  <h1>姓名是 {{name}}; 年龄是{{age}}</h1>
  <input
    type="text"
    v-model='name'
  >
  <h1>{{count}}</h1>
  <button @click="add">+</button>
  <button
    @click='minus'
    ref='child'
  >-</button>

  <ul>

    <li v-for='item in ary'>{{item}}</li>
  </ul>
  <todo />
</template>


<script>
import { ref, reactive, toRefs } from "vue";
import todo from "./components/todo/todo.vue";
import myinp from "./components/my_input.vue";
export default {
  // setup(props) {
  //   //  死活不写this
  //   let name = ref("珠峰");
  //   let count = ref(100);
  //   console.log(count);
  //   const add = () => {
  //     console.log("add");
  //     count.value++;
  //   };
  //   const minus = () => {
  //     count.value--;
  //   };
  //   return {
  //     name: name,
  //     age: 12,
  //     count,
  //     add,
  //     minus,
  //   };
  // },
  setup() {
    let child = ref("");
    let state = reactive({
      name: "珠峰",
      age: 12,
      count: 100,
      ary: [1, 2, 3, 4],
    });
    // console.log(toRefs(state));
    const add = () => {
      console.log("add");
      state.count++;
    };
    const minus = () => {
      state.count--;
      console.log(child.value);
    };
    return {
      ...toRefs(state),
      add,
      minus,
      child,
    };
  },
  components: {
    todo,
    "el-input": myinp,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
