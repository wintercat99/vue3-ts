<template>
  <YForm v-bind="searthFromConfig" v-model="formDate">
    <template #footer>
      <div class="handleBtn">
        <el-button icon="RefreshRight" @click="handleREsetClick"
          >重置</el-button
        >
        <el-button type="primary" icon="Search" @click="handleQueryClick"
          >搜索</el-button
        >
      </div>
    </template>
  </YForm>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import YForm from "@/base-ui/form";
const props = defineProps({
  searthFromConfig: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["resetBtnClick", "queryBtnClick"]);

const formItems = props.searthFromConfig?.formItems ?? [];
const formDriginData: any = [];
for (const item of formItems) {
  formDriginData[item.field] = "";
}
const formDate = ref(formDriginData);
//重置表单
const handleREsetClick = () => {
  for (const key in formDriginData) {
    formDate.value[`${key}`] = formDriginData[key];
  }
  emit("resetBtnClick");
};
//搜索表单
const handleQueryClick = () => {
  emit("queryBtnClick", formDate.value);
};
</script>

<style scoped lang="less">
.handleBtn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
