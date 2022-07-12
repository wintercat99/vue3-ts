<template>
  <el-container class="mainContent">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <NavMenu :collapse="isCollapse" />
    </el-aside>
    <el-container class="page">
      <el-header class="pageHeader">
        <NavHeader @foldChange="handleFoldChange" />
      </el-header>
      <el-footer class="historyBat"> <HistoryBar /></el-footer>
      <el-main class="pageContent">
        <router-view class="pageback"> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavMenu from "@/components/navMenu";
import NavHeader from "@/components/navHeader";
import HistoryBar from "@/components/historyBar";

import { ref } from "vue";
const isCollapse = ref(false);
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold;
};
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mainContent,
.page {
  height: 100%;
}
.pageContent {
  height: calc(100% - 48px);
  .pageback {
    background-color: #fff;
    border-radius: 5px;
  }
}

.historyBat {
  height: 30px;
  margin: 10px 0;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
  border-bottom: 1px solid #ccc;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  color: #f0f2f5;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-weblit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
