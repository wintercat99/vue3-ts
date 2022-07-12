<template>
  <div class="YTable">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
      <div class="handler">
        <slot name="headerHandler"> </slot>
      </div>
    </div>
    <el-table
      :data="listData"
      border
      stripe
      style="width: 100%"
      @selection-change="tableSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="props.showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :total="listCount"
          layout="total, prev, pager, next, jumper"
          small
          background
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
const props = defineProps({
  listData: {
    type: Array,
    require: true,
  },
  listCount: {
    type: Number,
    default: 0,
  },
  propsList: {
    type: Array as PropType<any[]>,
    require: true,
  },
  showIndexColumn: {
    type: Boolean,
    default: false,
  },
  showSelectColumn: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 1,
      pageSize: 5,
    }),
  },
  childrenProps: {
    type: Object,
    default: () => ({}),
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["selectionChange", "updata:page"]);
const tableSelectChange = (value: any) => {
  emit("selectionChange", value);
};
//分页
const handleSizeChange = (pageSize: number) => {
  emit("updata:page", { ...props.page, pageSize });
};
const handleCurrentChange = (currentPage: number) => {
  emit("updata:page", { ...props.page, currentPage });
};
</script>
<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  display: flex;
  justify-content: right;
}
</style>
