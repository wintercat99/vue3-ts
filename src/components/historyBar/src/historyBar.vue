<template>
  <div class="historyBar">
    <div
      v-for="(item, index) in history"
      :key="item.url"
      :class="router.path == item.url ? 'active' : ''"
      @click="changeRoute(item)"
    >
      {{ item.name }}
      <span class="delete" @click.stop="delRouter(index)">X</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
let store = useStore();
const userMenus = store.state.login.userMenus;
let history: any = [];
userMenus.map((item: any) => {
  item.children.map((arr: any) => {
    history.push(arr);
  });
});

const router = useRoute();
const routers = useRouter();

function changeRoute(route: any) {
  routers.push(route.url);
}
function delRouter(index: number) {
  history.splice(index, 1);
  routers.push("/main");
}
</script>
<style lang="less">
.historyBar {
  width: 100%;
  height: 30px;
  display: flex;
  align-content: center;

  div {
    width: 90px;
    height: 100%;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    color: #333;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    &.active {
      color: #fff;
      background: #67c23a;
      border-radius: 5px;
    }
  }

  .delete {
    margin-left: 10px;
    font-size: 12px;
    &:hover {
      color: #f56c6c;
    }
  }
}
</style>
