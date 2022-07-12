<template>
  <div class="navHeader">
    <el-icon class="foldMenu" @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'" />
    </el-icon>
    <div class="content">
      <NavBreadcrumb :breadcrumbs="breadcrumbs" />
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import UserInfo from "./userInfo.vue";
import NavBreadcrumb from "@/base-ui/breadcrumb";
import { userStore } from "@/store";
import { useRoute } from "vue-router";
import { pathMapBreadcrumbs } from "@/utils/mapMenus";

const isFold = ref(false);

const emit = defineEmits(["foldChange"]);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
};
//面包屑数据
const stroe = userStore();

const breadcrumbs = computed(() => {
  const userMenus = stroe.state.login.userMenus;
  const route = useRoute();
  const currentPath = route.path;
  return pathMapBreadcrumbs(userMenus, currentPath);
});
</script>

<style scoped lang="less">
.navHeader {
  display: flex;
  width: 100%;
  .foldMenu {
    width: 20px;
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

function ref(arg0: boolean) { throw new Error('Function not implemented.') }
