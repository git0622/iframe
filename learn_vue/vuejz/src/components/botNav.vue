<template>
  <ul class='bot_nav_box'>
    <li v-for='item in list'>
      <router-link :to='item.url'>
        <div class="icon_box">
          <van-icon :name="item.iconName" />
        </div>
        <div class="nav_text">
          {{item.text}}
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.bot_nav_box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 200;
  display: flex;
  align-items: center;
  li {
    flex: 1;
    text-align: center;
    a {
      color: #333;
    }
    a.active-class {
      color: turquoise;
    }
  }
}
</style>