<template>
  <div class='add_box'>
    <button @click='show=true'>add</button>
    <van-action-sheet
      v-model:show="show"
      title="标题"
      :close-on-click-action='true'
    >
      <button @click='sure'>确定</button>
      <button @click="changeType('1')">支出</button>
      <button @click="changeType('2')">收入</button>
      <ul style='display:flex'>
        <li
          v-for='item in list'
          @click='typechange(item)'
        >{{item.name}}</li>
      </ul>
      <Time
        @timeSelect='changeTime'
        :formatter="formatter"
        type="date"
      />
      <h1>{{value}}</h1>
      <div style='height:10rem'>
        <van-number-keyboard
          :show="true"
          extra-key="."
          close-button-text="完成"
          v-model="value"
        />
      </div>
    </van-action-sheet>
  </div>

</template>

<script>
import { computed, reactive, toRefs } from "vue";
import Time from "./time.vue";
import { useStore } from "vuex";
import { addBill } from "@/api/index.js";
export default {
  components: { Time },
  setup() {
    let store = useStore();
    let state = reactive({
      show: false,
      type: 1,
      value: "",
      date: new Date(),
      type_id: "1",
      type_name: "",
      pay_type: "",
    });
    const changeTime = (time) => {
      state.date = new Date(time);
    };
    const formatter = (type, val) => {
      if (type === "year") {
        return `${val}年`;
      }
      if (type === "month") {
        return `${val}月`;
      }
      return val;
    };
    const changeType = (n) => {
      state.type = n;
      console.log(n, 1111);
    };
    let list = computed(() => {
      let type = state.type;
      console.log(state.type);
      return store.state.typeList.filter((item) => item.type == type);
    });
    const sure = () => {
      addBill({
        date: new Date(state.date).getTime(),
        type_id: state.type_id / 1,
        type_name: state.type_name,
        pay_type: state.type / 1,
        amount: state.value,
        remark: "",
      }).then(() => {
        state.show = false;
      });
    };
    const typechange = (item) => {
      state.pay_type = item.type;
      state.type_id = item.id;
      state.type_name = item.name;
    };
    return {
      ...toRefs(state),
      changeTime,
      formatter,
      changeType,
      list,
      sure,
      typechange,
    };
  },
};
</script>

<style lang="less" scoped>
.add_box {
  :deep(.van-number-keyboard) {
    position: relative;
  }
}
</style>