<template>
  <div class="goods">
    <PageSearch
      :searthFromConfig="searthFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      @newBtnClick="handelNewData"
      @editBtnClick="handelEditData"
    >
      <template #stetus="scope">
        <el-tag :type="scope.row.stetus ? 'success' : 'danger'">{{
          scope.row.stetus ? "启用" : "禁用"
        }}</el-tag>
      </template>
      <template #imgUrl="scope">
        <el-image
          preview-teleported="true"
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
    </PageContent>
    <PageModel
      ref="pageModelRef"
      :modelConfig="modelConfig"
      :defaultInfo="defaultInfo"
      pageName="goods"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/pageSeaarch";
import PageContent from "@/components/pageContnet";
import PageModel from "@/components/pageModel";

import { searthFromConfig } from "./config/searth.config";
import { contentTableConfig } from "./config/content.config";
import { modelConfig } from "./config/model.config";

import { userPageSearch } from "@/hooks/usePageSearch";
import { usePageModel } from "@/hooks/usePageModel";

//调用hook获取公共变量和函数
const { pageContentRef, handleQueryClick, handleResetClick } = userPageSearch();

const newCallback = () => {
  const imgUrlItem = modelConfig.formItems.find(
    (item) => item.field === "imgUrl"
  );
  const fileUrlItem = modelConfig.formItems.find(
    (item) => item.field === "fileUrl"
  );
  imgUrlItem!.isHiddon = true;
  fileUrlItem!.isHiddon = false;
};
const editCallback = () => {
  const imgUrlItem = modelConfig.formItems.find(
    (item) => item.field === "imgUrl"
  );
  const fileUrlItem = modelConfig.formItems.find(
    (item) => item.field === "fileUrl"
  );
  imgUrlItem!.isHiddon = false;
  fileUrlItem!.isHiddon = true;
};

const { pageModelRef, defaultInfo, handelNewData, handelEditData } =
  usePageModel(newCallback, editCallback);
</script>

<style scoped lang="less">
.goods {
  padding-top: 22px;
}
</style>
