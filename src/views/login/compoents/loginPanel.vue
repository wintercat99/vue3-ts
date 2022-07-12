<template>
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span> <i class="el-icon-s-custom"></i>账号登录 </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <span> <i class="el-icon-mobile"></i> 手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="accountControl">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginAccount from "./loginAccount.vue";
import LoginPhone from "./loginPhone.vue";

//定义属性
const isKeepPassword = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();
const phoneRef = ref<InstanceType<typeof LoginPhone>>();
const currentTab = ref("account");

//定义方法
const handleLoginClick = () => {
  if (currentTab.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value);
  } else {
    phoneRef.value?.loginPhone();
  }
};
</script>

<style scoped lang="less">
.loginPanel {
  margin-bottom: 150px;
  width: 320px;
}
.title {
  text-align: center;
}
.accountControl {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.loginBtn {
  width: 100%;
  margin-top: 10px;
}
</style>
