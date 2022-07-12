<template>
  <div class="pageModel">
    <el-dialog
      v-model="dialogVisible"
      title="用户信息"
      width="30%"
      destroy-on-close
    >
      <YForm v-bind="modelConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfigClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, PropType } from "vue";
import YForm from "@/base-ui/form";
import { userStore } from "@/store";
const props = defineProps({
  modelConfig: {
    type: Object as PropType<any>,
    require: true,
  },
  defaultInfo: {
    type: Object,
    default: () => ({}),
  },
  pageName: {
    type: String,
    require: true,
  },
  otherInfo: {
    type: Object,
    default: () => ({}),
  },
});
const dialogVisible = ref(false);
const formData = ref<any>({});

//点击确认按钮
const store = userStore();
const handleConfigClick = () => {
  if (Object.keys(props.defaultInfo).length) {
    //编辑
    // store.dispatch("system/editPageDataAction", {
    //   pageName: props.pageName,
    //   editData: { ...formData.value, ...props.otherInfo },
    //   id: props.defaultInfo.id,
    // });
  } else {
    console.log(formData.value, "新增");

    //新建
    // store.dispatch("system/createPageDataAction", {
    //   pageName: props.pageName,
    //   newData: { ...formData.value , ...props.otherInfo },
    // });
  }
  dialogVisible.value = false;
};

watch(
  () => props.defaultInfo,
  (val) => {
    for (const item of props.modelConfig.formItems) {
      formData.value[item.field] = val[item.field];
    }
  }
);

defineExpose({ dialogVisible });
</script>
<style scoped></style>
