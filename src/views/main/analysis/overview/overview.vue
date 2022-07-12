<template>
  <div class="map-container" ref="map" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Viewer } from "cesium";

const map = ref();
onMounted(() => {
  const viewer = new Viewer(map.value);
});
</script>

<style scoped lang="less">
.map-container {
  width: 99%;
  height: 100%;
}
/deep/.cesium-viewer-bottom {
  display: none;
}
</style>
