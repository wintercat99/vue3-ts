<template>
  <div class="baseEchart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watchEffect } from "vue";
import useEcharts from "../hooks/useEcharts";
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  width: {
    type: String,
    default: "680px",
  },
  height: {
    type: String,
    default: "400px",
  },
});

const echartRef = ref<HTMLElement>();
onMounted(() => {
  const { setOptions } = useEcharts(echartRef.value!);

  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>
<style scoped></style>
