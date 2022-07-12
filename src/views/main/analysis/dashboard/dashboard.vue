<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">
        <YCard title="分类商品数量(饼图)">
          <PieEcharts :pieData="categoryGoodsCount"></PieEcharts>
        </YCard>
      </el-col>
      <el-col :span="10">
        <YCard title="不同城市商品数量">
          <MapEcharts :mapData="addressGoodsSale"></MapEcharts> </YCard
      ></el-col>
      <el-col :span="7">
        <YCard title="分类商品数量(折线图)">
          <categoryEcharts v-bind="categoryGoodsSale"></categoryEcharts>
        </YCard>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="contentRow">
      <el-col :span="12">
        <YCard title="分类商品的销量">
          <LineEcharts></LineEcharts>
        </YCard>
      </el-col>
      <el-col :span="12">
        <YCard title="分类商品的收藏">
          <GraphEcharts></GraphEcharts>
        </YCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import YCard from "@/base-ui/card";
import { userStore } from "@/store";
import {
  PieEcharts,
  LineEcharts,
  GraphEcharts,
  categoryEcharts,
  MapEcharts,
} from "@/components/pageEcharts";
import { computed } from "@vue/runtime-core";

const store = userStore();
store.dispatch("dashboard/getDashboardDataAction");

const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return {
      value: item.value,
      name: item.name,
    };
  });
});

const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return {
      value: item.value,
      name: item.name,
    };
  });
});

const categoryGoodsSale = computed(() => {
  const xLabels: string[] = [];
  const values: any[] = [];

  const categoryGoodsSale = store.state.dashboard.categoryGoodsSales;

  for (const item of categoryGoodsSale) {
    xLabels.push(item.name);
    values.push(item.value);
  }

  return {
    xLabels,
    values,
  };
});
</script>

<style scoped lang="less">
.contentRow {
  margin-top: 20px;
}
</style>
