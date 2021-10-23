<template>
  <div class="home">
    <div class="header_box">
      <AllType
        :list='$store.state.typeList'
        :title="['支出1','收入1']"
        @typeChange='typechange'
      />

      <Time
        @timeSelect='changeTime'
        :formatter="formatter"
        type="year-month"
      />
      <Add />
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
// @ is an alias to /src
import AllType from "@/components/home/allType.vue";
import Add from "@/components/home/add.vue";
import Time from "@/components/home/time.vue";
import { getDataList } from "@/api/index.js";

export default {
  name: "Home",
  components: { AllType, Add, Time },
  // beforeRouteLeave(to, from) {
  //   // 在导航离开渲染该组件的对应路由时调用
  //   // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  //   // console.log("是否要离开");
  //   let res = prompt("是否要离开");
  //   console.log(res);
  //   if (res) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return false;
  // },
  setup(props) {
    let state = reactive({
      currentDate: new Date(),
      page: 1,
      page_size: 10,
      type_id: "all",
    });

    const getList = () => {
      let date = new Date(state.currentDate);

      getDataList({
        date:
          "" +
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1),
        type_id: state.type_id,
        page: state.page,
        page_size: state.page_size,
      }).then((data) => {
        console.log("type", data);
      });
    };
    const typechange = (item) => {
      console.log(item);
      state.type_id = item ? item.id : "all";
      getList();
    };

    const changeTime = (time) => {
      state.currentDate = new Date(time);
      getList();
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
    return {
      ...toRefs(state),
      typechange,
      formatter,
      changeTime,
    };
  },
};
</script>
