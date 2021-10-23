<template>
  <div class='all_type_box'>
    <button @click='showAllType'>展示所有类型</button>
    <van-action-sheet
      v-model:show="show"
      title="标题"
      :close-on-click-action='true'
    >
      <div class="all_box">
        <van-button
          @click='fn({id:"all"})'
          :class='{active:id=="all"}'
        >全部类型</van-button>
      </div>
      <div class="zhichu_box">
        <h3>{{title[0]||'支出'}}</h3>
        <van-button
          v-for='item in zhichu'
          :class='{active:id==item.id}'
          @click='fn(item)'
        >
          {{item.name}}
        </van-button>
      </div>
      <div class="shouru_box">
        <h3>{{title[1]||收入}}</h3>
        <van-button
          v-for='item in shouru'
          :class='{active:id==item.id}'
          @click='fn(item)'
        >
          {{item.name}}
        </van-button>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
import { computed } from "vue";
export default {
  // props: ["list"],
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    title: [Array, String],
  },
  setup(props, ctx) {
    let state = reactive({
      show: false,
      id: "all",
    });
    const showAllType = () => {
      state.show = true;
    };
    let zhichu = computed(() => props.list.filter((item) => item.type == 1));
    let shouru = computed(() => props.list.filter((item) => item.type == 2));
    const fn = (item) => {
      state.show = false;
      state.id = item.id;
      ctx.emit("typeChange", item);
    };
    return {
      ...toRefs(state),
      showAllType,
      zhichu,
      shouru,
      fn,
    };
  },
};
</script>

<style lang="less" scoped>
.active {
  color: red;
}
</style>