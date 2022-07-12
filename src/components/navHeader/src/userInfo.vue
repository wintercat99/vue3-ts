<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :src="url" />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="DArrowLeft" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item icon="Postcard">用户信息</el-dropdown-item>
          <el-dropdown-item icon="Setting">用户管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";
import { computed } from "vue";
import localCache from "@/utils/cache";
import router from "@/router";

const name = computed(() => store.state.name);
const url = require("../../../../src/assets/img/zhaop2.jpg");
const handleExitClick = () => {
  localCache.deleteCache("token");
  router.push("/login");
};
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
}
</style>
