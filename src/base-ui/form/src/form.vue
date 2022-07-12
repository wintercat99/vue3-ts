<template>
  <div class="YFrom">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8" v-bind="colLayout">
            <el-form-item
              v-if="!item.isHiddon"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formDate[item.field]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formDate[item.field]"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherPotions"
                  v-model="formDate[item.field]"
                >
                </el-date-picker>
              </template>
              <template v-else-if="item.type === 'imageUrl'">
                <el-image
                  style="width: 100%; height: 100%"
                  :src="item.imageUrl"
                />
              </template>
              <template v-else-if="item.type === 'upload'">
                <el-upload
                  action="#"
                  ref="pictureUpload"
                  list-type="picture-card"
                  limit="1"
                  :class="{ disUoloadBtn: formDate.fileUrl }"
                  :auto-upload="false"
                  :on-change="handleChange"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                  <img w-full style="width: 100%" :src="dialogImageUrl" />
                </el-dialog>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch, reactive } from "vue";
import { IFormItem } from "../types";
import type { UploadFile } from "element-plus";
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
  },
  labelWidth: {
    type: String,
    default: "100px",
  },
  itemStyle: {
    type: Object,
    defauly: () => ({ padding: "10px 40px" }),
  },
  colLayout: {
    type: Object,
    defult: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  },
});
const emit = defineEmits(["update:modelValue", "handleChangeUpload"]);
const formDate = ref({ ...props.modelValue });

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file, "删除的调用");
  // formDate.value.fileUrl = "";
  // const uploadFiles = file.url;
  // console.log(uploadFiles);
  // for (let i = 0; i < uploadFiles.length; i++) {
  //   if (uploadFiles[i]["url"] === file.url) {
  //     uploadFiles.splice(i, 1);
  //   }
  // }
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleChange = (file: UploadFile) => {
  const fileUrlItem = props.formItems.find((item) => item.field === "fileUrl");
  if (fileUrlItem) {
    formDate.value[fileUrlItem.field] = file.url;
  }
};

watch(
  formDate,
  (newValue) => {
    console.log(newValue, "formDate");

    emit("update:modelValue", newValue);
  },
  { deep: true }
);
</script>

<style scoped lang="less">
.disUoloadBtn {
  /deep/.el-upload--picture-card {
    display: none;
  }
}
</style>
