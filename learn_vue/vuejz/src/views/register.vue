<template>
  <van-nav-bar
    title="注册"
    left-text="返回"
    right-text="..."
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { toRefs, reactive } from "@vue/reactivity";
import { register } from "@/api/index.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    const state = reactive({
      username: "",
      password: "",
    });
    const onClickLeft = () => {};
    const onClickRight = () => {};
    const onSubmit = () => {
      register(state.username, state.password).then((data) => {
        console.log(data);
        if (data.code == 200) {
          router.replace("/login");
        }
      });
    };
    return {
      onClickLeft,
      onClickRight,
      onSubmit,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>