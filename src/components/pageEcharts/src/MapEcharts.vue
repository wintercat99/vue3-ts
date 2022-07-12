<template>
  <div class="pieEcharts">
    <BaseEcharts
      :options="options"
      :width="'580px'"
      :height="'300px'"
    ></BaseEcharts>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, withDefaults } from "vue";
import BaseEcharts from "@/base-ui/echarts";
import { convertData } from "../utils/convertData";
import { IDataType } from "../types";

const props = withDefaults(
  defineProps<{
    title?: string;
    mapData: IDataType[];
  }>(),
  {
    title: "",
  }
);

var max = 100000,
  min = 900; // todo
var maxSize4Pin = 100,
  minSize4Pin = 20;

const options = computed(() => {
  return {
    // title: {
    //   text: "购买对象所在省份TOP10",
    //   subtext: "销售面积区间",
    //   x: "center",
    //   textStyle: {
    //     color: "#ccc",
    //   },
    // },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        if (typeof params.value[2] == "undefined") {
          return params.name + " : " + params.value;
        } else {
          return params.name + " : " + params.value[2];
        }
      },
    },
    legend: {
      orient: "vertical",
      y: "bottom",
      x: "right",
      data: ["sell_area"],
      textStyle: {
        color: "#fff",
      },
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: "left",
      top: "bottom",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        // color: ['#3B5077', '#031525'] // 蓝黑
        // color: ['#ffc0cb', '#800080'] // 红紫
        // color: ['#3C3B3F', '#605C3C'] // 黑绿
        color: ["#0f0c29", "#302b63", "#24243e"], // 黑紫黑
        // color: ['#23074d', '#cc5333'] // 紫红
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#1488CC', '#2B32B2'] // 浅蓝
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
      },
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //             dataView: {readOnly: false},
    //             restore: {},
    //             saveAsImage: {}
    //             }
    // },
    geo: {
      show: true,
      map: "china",
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#031525",
          borderColor: "#3B5077",
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
    },
    series: [
      {
        name: "credit_pm2.5",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        symbolSize: function (val: any) {
          return val[2] / 10000;
        },
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
          },
        },
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#031525",
            borderColor: "#3B5077",
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        animation: false,
        data: props.mapData,
      },
      {
        name: "点",
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: function (val: any) {
          var a = (maxSize4Pin - minSize4Pin) / (max - min);
          var b = minSize4Pin - a * min;
          b = maxSize4Pin - a * max;
          return a * val[2] + b;
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 9,
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#F62157", //标志颜色
          },
        },
        zlevel: 6,
        data: convertData(props.mapData),
      },
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: convertData(
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          props.mapData
            .sort(function (a: any, b: any) {
              return b.value - a.value;
            })
            .slice(0, 5)
        ),
        symbolSize: function (val: any) {
          return val[2] / 5000;
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
            shadowBlur: 10,
            shadowColor: "#05C3F9",
          },
        },
        zlevel: 1,
      },
    ],
  };
});
</script>
<style scoped></style>
