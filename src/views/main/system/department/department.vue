<template>
  <div class="department">
    <PageSearch
      :searthFromConfig="searthFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @newBtnClick="handelNewData"
      @editBtnClick="handelEditData"
    >
    </PageContent>

    <PageModel
      ref="pageModelRef"
      :modelConfig="modelConfigRef"
      :defaultInfo="defaultInfo"
      pageName="department"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { userStore } from "@/store";

import PageSearch from "@/components/pageSeaarch";
import PageContent from "@/components/pageContnet";
import PageModel from "@/components/pageModel";

import { searthFromConfig } from "./config/searth.config";
import { contentTableConfig } from "./config/content.config";
import { modelConfig } from "./config/model.config";

import { userPageSearch } from "@/hooks/usePageSearch";
import { usePageModel } from "@/hooks/usePageModel";

//pageModel相关hook逻辑
const newCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHiddon = false;
};
const editCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === "password"
  );
  passwordItem!.isHiddon = true;
};

//动态添加部门和角色
const store = userStore();
const modelConfigRef = computed(() => {
  const departmentItem = modelConfig.formItems.find(
    (item) => item.field === "departmentId"
  );
  departmentItem!.options = store.state.entireDeparTment.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const roleItem = modelConfig.formItems.find(
    (item) => item.field === "roleId"
  );
  roleItem!.options = store.state.entireRole.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  return modelConfig;
});

//调用hook获取公共变量和函数
const { pageContentRef, handleQueryClick, handleResetClick } = userPageSearch();

const { pageModelRef, defaultInfo, handelNewData, handelEditData } =
  usePageModel(newCallback, editCallback);
</script>

<style scoped lang="less">
.department {
  padding-top: 22px;
}
</style>
