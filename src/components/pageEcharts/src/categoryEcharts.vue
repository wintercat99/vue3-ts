<template>
  <div class="pieEcharts">
    <BaseEcharts
      :options="options"
      :width="'400px'"
      :height="'300px'"
    ></BaseEcharts>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import BaseEcharts from "@/base-ui/echarts";

const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
  }>(),
  {
    title: "",
  }
);

const options = computed(() => {
  return {
    tooltip: {
      trigger: "axis",
    },
    // legend: {
    //   color: ["#F58080"],
    //   data: ["新报"],
    //   left: "center",
    //   bottom: "bottom",
    // },
    grid: {
      top: "middle",
      left: "3%",
      right: "4%",
      bottom: "3%",
      height: "80%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: props.xLabels,
      axisLine: {
        lineStyle: {
          color: "#999",
        },
      },
    },
    yAxis: {
      type: "value",

      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#DDD",
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#333",
        },
      },
      nameTextStyle: {
        color: "#999",
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        name: "新报",
        type: "line",
        data: props.values,
        color: "#F58080",
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: "linear",

              colorStops: [
                {
                  offset: 0,
                  color: "#FFCAD4", // 0% 处的颜色
                },
                {
                  offset: 0.4,
                  color: "#F58080", // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#F58080", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            shadowColor: "rgba(245,128,128, 0.5)",
            shadowBlur: 10,
            shadowOffsetY: 7,
          },
        },
        itemStyle: {
          normal: {
            color: "#F58080",
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
            borderColor: "#F58080",
          },
        },
        smooth: true,
      },
    ],
  };
});
</script>
<style scoped></style>
