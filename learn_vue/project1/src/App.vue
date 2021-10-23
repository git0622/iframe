<template>
  <!-- 小胡子{{}} 当中或者指令后边  都只能写表达式 不能写语句 -->
  <!-- <h1>姓名是{{name}}年龄是{{age}}</h1>
  <input
    type="text"
    v-model='name'
  >
  <div v-html='str'></div>
  <ul>
    <template
      v-for="(val,i) in ary"
      :key='val'
    >
      <li>
        {{i}}{{val}}
      </li>
    </template>

  </ul>
  <p v-if='"11"'>{{name}}</p>

  <button @click='fn(),fn2()'>按你牛</button>
  <button @click.stop='fn(1,$event,2,2,3,4,5,6,$event)'>按你牛</button>

  {{obj}}

  <div @click.once='father'>
    father
    <h2 @click='child'>child</h2>
  </div>

  <input
    type="text"
    @keyup.q="submit"
  > -->
  <!-- <my-todo /> -->
  <!-- <Parent /> -->
  <!-- <c1 /> -->
  <!-- <Parent3 /> -->
  <hh />
  <input
    type="text"
    v-model='num'
  >
  <input
    type="text"
    v-model='num2'
  >
  <h2>double:{{d_num}}--{{d_num2}}</h2>
  <h1>{{count}}</h1>
  <button @click='add'>+</button>

</template>


<script>
/* 
  2.0的模板要求只能有一个根元素  3.0没有这个要求
  双向数据绑定（数据更新视图；试图更新数据）和单向数据流（默认只能从上向下流）
  defineProperty
  Proxy
  v-model  主要 2.0  :value  和 @input 的一个结合体
                3.0  :modelValue  @update:modelValue
  v-text   相当于原生的 innerText    
  v-html   相当于原生的 innerHTML   
  
  v-cloak  后边没有内容  主要是用来解决下胡子的显示问题  需要配合css使用  
          vue编译完成之前 v-cloak 就是一个普通用的html行内属性
              编译完成之后会把这个属性删除   
  v-pre   告诉vue有这个指令的html结构不用vue单独编译 整个那获取使用即可    
          优化性的指令 主要用在哪些静态模板上  用以提升vue的编译效率 
  v-once  有这个指令的元素 只会渲染一次 以后不在对应更新了
          
  v-for  像循环哪个元素 就在那个元素上添加v-for  数组  字符串 数字 对象  
  v-bind  处理行内属性的一个指令 简写:  
  v-if   控制当前元素是否加载的一个指令  
    v-else-if
    v-else  

    2.0 v-for和v-if同时使用的时候  v-for的优先级比较高
    3.0 v-for和v-if同时使用的时候  v-if的优先级比较高
  v-show 用来判断结构是否展示的一个指令（display）  
      一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
  
  v-on 简写@ 绑定事件用的
    2.0 只能绑定一个函数
    3.0 可以绑定多个 对应函数需要写上()

    修饰符： .stop  .prevent .self  .enter

    v-model 修饰符  .lazy    .number  .trim



    过滤器  Vue.filter  filters   3.0已经移除了

*/
import todo from "@/components/todo/todo.vue";
import Parent from "./components/fuzi/parent.vue";
import Parent2 from "@/components/learn_slot/parent.vue";
import Parent3 from "./626/parent.vue";
import mixin from "./mixin/index";
import { computed, reactive, toRefs, watchEffect, watch, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { "my-todo": todo, Parent3, Parent2 },
  mixins: [mixin],
  setup(props) {
    let store = useStore(); // 这个就是vue2中this.$store
    let state = reactive({
      num: 100,
      num2: 200,
    });
    let d_num = computed(() => {
      return state.num * 2;
    });
    let d_num2 = computed({
      get() {
        return state.num * 2;
      },
      set(val) {},
    });

    watchEffect(() => {
      let a = state.num;
      console.log("watcheffect");
    });
    // watch(
    //   () => {
    //     return state.num;
    //   },
    //   (n, o) => {
    //     console.log("watch");
    //   }
    // );
    // watch(state.num, () => {
    //   // 错误写法
    // });
    let a = ref(0),
      b = ref(0);
    watch(
      () => [state.num, state.num2],
      (n, o) => {
        console.log(n, o);
      }
    );
    let count = computed(() => {
      return store.state.count;
    });
    const add = () => {
      store.commit("changeCount", 30);
    };
    return {
      ...toRefs(state),
      d_num,
      d_num2,
      a,
      b,
      count,
      add,
    };
  },
  // data() {
  //   //组件中的 data 为什么必须是一个函数？
  //   //保证组件复用的时候 各个组件的数据的独立性
  //   return {
  //     name: "珠峰",
  //     age: 12,
  //     ary: [111, 222, 333, 444],
  //     obj: {
  //       a: 123,
  //     },
  //     str: "<img src='https://img2.baidu.com/it/u=4193820905,2471533465&fm=26&fmt=auto&gp=0.jpg'/>",
  //   };
  // },
  // provide: {
  //   zzz: 123,
  // },
  // methods: {
  //   fn(e) {
  //     console.log(this);
  //     //  在vue2.0中 直接通过索引的方式修改数组中的项是不会触发视图更新的
  //     //  2.0中想要修改数组中的项 需要使用 vue规定那7个数组的变异方法
  //     // this.ary[0] = 99999;
  //     // console.log(e);
  //     console.log(6666);
  //     // 2，0中想给对象新增属性的时候 不会触发试图更新；
  //     // 若想更新 则需要使用 this.$set(obj,'b',666)
  //     this.obj.b = 666;
  //   },
  //   fn2() {
  //     console.log("fn2");
  //   },
  //   father() {
  //     console.log("father");
  //   },
  //   child() {
  //     console.log("child");
  //   },
  //   submit() {
  //     console.log("submit");
  //   },
  // },
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
