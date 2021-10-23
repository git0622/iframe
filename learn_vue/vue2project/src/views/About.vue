<template>
  <div class="about">

    <h1>{{Ccount}}{{Acount}}{{qqqq}}</h1>
    <ul>
      <li
        ref='qq'
        v-for='item in ary'
      >{{item}}</li>
    </ul>
    {{obj}}
    <button @click='C_ADDCOUNT(15)'>+</button>
    <button @click='C_ADDCOUNT(-10)'></button>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      ary: [111, 222, 333, 444],
      obj: {
        a: 123,
      },
    };
  },
  created() {
    // this.getData();
    this.$store.dispatch("AA/getData");
    console.log(this.$route);
  },
  computed: {
    // Ccount(){
    //   return this.$store.state.C.Ccount
    // }
    ...mapState("C", ["Ccount", "qqqq"]),
    ...mapState("AA", ["Acount"]),
  },
  methods: {
    fn(n) {
      // this.obj.b = 666;
      // console.log(this.obj);
      // this.$set(this.ary, 0, 100);
      // this.$set(this.obj, "b", 666);
      // console.log(this.$nextTick);
      // $parent  $children $refs
      // this.$store.state.count += 20;
      // this.$store.commit("changeCount", { num: n });
      // this.$store.commit("changeCount", 888);
      // this.$store.commit("C/changeCount", 888);
    },
    ...mapMutations("C", ["C_ADDCOUNT"]),
    ...mapActions("AA", ["getData"]),
  },
  mounted() {
    //  DOM 的更新是一个异步的操作
    // console.log(this.$refs.qq.length);
    // console.log(this.ary);
    // this.ary.push(1000);
    // this.ary.push(1000);
    // this.ary.push(1000);
    // this.ary.push(1000);
    // console.log(this.ary.length);
    // console.log(this.$refs.qq.length);
    this.$nextTick(() => {
      // console.log(this.$refs.qq.length);
    });
    this.$nextTick(() => {
      // console.log(this.$refs.qq.length);
    });
    this.$nextTick(() => {
      // console.log(this.$refs.qq.length);
    });
  },
};
</script>
