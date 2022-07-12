<template>
  <div class="loginAccounte">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/accountConfig";
import { ElForm } from "element-plus";
import localeCache from "@/utils/cache";
const account = reactive({
  name: localeCache.getCache("name") ?? "",
  password: localeCache.getCache("password") ?? "",
});
const store = useStore();
const formRef = ref<InstanceType<typeof ElForm>>();
function loginAction(isKeepPassword: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      //1、是否需要记住密码
      if (isKeepPassword) {
        //本地缓存
        localeCache.setCache("name", account.name);
        localeCache.setCache("password", account.password);
      } else {
        localeCache.deleteCache("name");
        localeCache.deleteCache("password");
      }
      //2、开始进行登录验证
      store.dispatch("login/accountLoginAction", { ...account });
    }
  });
}
defineExpose({ loginAction, account });
</script>

<style scoped lang="less"></style>
