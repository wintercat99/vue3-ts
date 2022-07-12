import store from "@/store" import store from "@/store"

<template>
  <div class="navMenu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.png" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+Ts</span>
    </div>
    <el-menu
      :default-active="defaultMenu"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的展开标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon class="icon">
                <component :is="item?.icon" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <el-icon class="icon">
                  <component :is="subitem?.icon" />
                </el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon class="icon">
              <component :is="item?.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { pathMapToMenu } from "@/utils/mapMenus";
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});
//菜单数据
const store = useStore();
const route = useRoute();
const userMenus = computed(() => store.state.login.userMenus);

//刷新路径显示
const currentPath = route.path;
const menu = pathMapToMenu(userMenus.value, currentPath);
const defaultMenu = ref(menu.id + "");

//菜单切换
const router = useRouter();
const handleMenuClick = (item: any) => {
  router.push({
    path: item.url ?? "/notFound",
  });
};
</script>

<style scoped lang="less">
.navMenu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .icon {
    margin: 0 5px;
    height: 18px;
    vertical-align: middle;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }

  .el-submenu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu {
  border-right: none;
}
.el-menu-vertical:not(.el-menu--collpase) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

function commit(arg0: string, menuList: { id: number; name: string; type:
number; icon: string; children: ({ id: number; type: number; icon: string; name:
string; url?: undefined }|{ id: number; type: number; icon: string; name:
string; url: string })[] }[]) { throw new Error("Function not implemented.") }
function commit(arg0: string, menuList: { id: number; name: string; type:
number; icon: string; children: ({ id: number; type: number; icon: string; name:
string; url?: undefined }|{ id: number; type: number; icon: string; name:
string; url: string })[] }[]) { throw new Error("Function not implemented.") }
