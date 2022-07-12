<template>
  <div class="pageContent">
    <YTable
      :listData="listData"
      :listCount="dataCount"
      v-model:page="pageInfo"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <template #headerHandler>
        <el-button type="primary" icon="plus" @click="handlerNewClick">
          {{ contentTableConfig.addListName }}
        </el-button>
      </template>
      <template #handler="scope">
        <div class="handlerClass">
          <el-button
            size="small"
            icon="EditPen"
            type="primary"
            text
            @click="handelEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            icon="Delete"
            type="danger"
            text
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"> </slot>
        </template>
      </template>
    </YTable>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, PropType, watch } from "vue";
import { userStore } from "@/store";

import YTable from "@/base-ui/table";

const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<any>,
    require: true,
  },
  pageName: {
    type: String,
    require: true,
  },
});

const emit = defineEmits(["newBtnClick", "editBtnClick"]);

const pageInfo = ref({
  currentPage: 1,
  pageSize: 5,
});

// watch(pageInfo, () => getPageData());

const store = userStore();
//发送请求
const getPageData = (queryInfo: any = {}) => {
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo,
    },
  });
};
getPageData();

defineExpose({ getPageData });

const dataList = computed(() =>
  store.getters["system/pageListData"](props.pageName)
);
const dataCount = computed(() =>
  store.getters["system/pageListCount"](props.pageName)
);

const listData = computed(() => {
  let start = (pageInfo.value.currentPage - 1) * 5;
  let end = pageInfo.value.currentPage * 5;
  return dataList.value.slice(start, end);
});

const selectionChange = (value: any) => {
  console.log(value);
};
//删除
const handleDeleteClick = (rows: any) => {
  // store.dispatch("system/deletePageListAction", {
  //   props.pageName,
  //   id: item.id,
  // });
  const index = dataList.value.indexOf(rows);
  if (index !== -1) {
    dataList.value.splice(index, 1);
  }
};
//编辑
const handlerNewClick = () => {
  emit("newBtnClick");
};
const handelEditClick = (item: any) => {
  emit("editBtnClick", item);
};
//获取动态插槽名称
const otherPropSlots = props.contentTableConfig?.propsList.filter(
  (item: any) => {
    if (item.slotName === "createAt") return false;
    if (item.slotName === "updateAt") return false;
    if (item.slotName === "handler") return false;
    return true;
  }
);
</script>
<style scoped lang="less">
.pageContent {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
