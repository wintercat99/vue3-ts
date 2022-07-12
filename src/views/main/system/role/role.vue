<template>
  <div class="role">
    <PageSearch
      :searthFromConfig="searthFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handelNewData"
      @editBtnClick="handelEditData"
    >
    </PageContent>

    <PageModel
      ref="pageModelRef"
      :modelConfig="modelConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menuTree">
        <el-tree
          ref="menuTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </PageModel>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref } from "vue";
import { userStore } from "@/store";
import { ElTree } from "element-plus";
import { getMapLeafKeys } from "@/utils/mapMenus";

import PageSearch from "@/components/pageSeaarch";
import PageContent from "@/components/pageContnet";
import PageModel from "@/components/pageModel";

import { searthFromConfig } from "./config/searth.config";
import { contentTableConfig } from "./config/content.config";
import { modelConfig } from "./config/model.config";

import { userPageSearch } from "@/hooks/usePageSearch";
import { usePageModel } from "@/hooks/usePageModel";

//处理pageModel的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>();
const editCallback = (item: any) => {
  if (item.menuList) {
    const leafKeys = getMapLeafKeys(item.menuList);
    nextTick(() => {
      console.log(elTreeRef.value);

      elTreeRef.value?.setCheckedKeys(leafKeys, false);
    });
  }
};

//动态添加部门和角色
const store = userStore();
const menus = computed(() => {
  return store.state.entireMenu;
});
const otherInfo = ref({});
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };
};
//调用hook获取公共变量和函数
const { pageContentRef, handleQueryClick, handleResetClick } = userPageSearch();

const { pageModelRef, defaultInfo, handelNewData, handelEditData } =
  usePageModel(undefined, editCallback);
</script>

<style scoped lang="less">
.role {
  padding-top: 22px;
}
.menuTree {
  margin-left: 25px;
}
</style>
