<template>
  <div class="loginPhone">
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="getBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/accountConfig";
import { ElForm } from "element-plus";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = useStore();
const phone = reactive({
  num: "",
  code: "",
});
const formRef = ref<InstanceType<typeof ElForm>>();
function loginPhone() {
  formRef.value?.validate((valid) => {
    if (valid) {
      //开始进行登录验证
      // store.dispatch('login/accountLoginAction', { ...phone })
    }
  });
}
defineExpose({ loginPhone, phone });
</script>

<style scoped lang="less">
.getCode {
  display: flex;
}
.getBtn {
  margin-left: 10px;
}
</style>
