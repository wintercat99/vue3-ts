<template>
  <el-card class="boxCard">
    <template #header>
      <div class="cardHeader">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item"><slot></slot></div>
  </el-card>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
});
</script>
<style scoped lang="less">
.boxCard {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }

  .cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }

  .item {
    margin-bottom: 10px;
  }
}
</style>
