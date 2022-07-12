import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "./type";
import login from "./login//login";
import system from "./main/system";
import dashboard from "./main/analysis/dashboard";

import { getPageListData } from "@/service/main/system/system";
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "winter",
      age: 18,
      entireDeparTment: [],
      entireRole: [],
      entireintro: [],
      entireMenu: [],
    };
  },
  mutations: {
    changeEntireDeparTment(state, list) {
      state.entireDeparTment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireintro(state, list) {
      state.entireintro = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    },
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // const departmentResult = await getPageListData("/department/list", {
      //   offset: 0,
      //   size: 10,
      // });
      // const { list: departmentList } = departmentResult.data;

      // const roleResult = await getPageListData("/role/list", {
      //   offset: 0,
      //   size: 10,
      // });
      // const { list: roleList } = roleResult.data;

      // const menuResult = await getPageListData("/menu/list", {});
      // const { list: menuList } = menuResult.data;

      const departmentList = [
        {
          name: "技术部",
          id: 1,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
        {
          name: "人事部",
          id: 2,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
        {
          name: "运维部",
          id: 3,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
        {
          name: "财务部",
          id: 4,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
        {
          name: "采购部",
          id: 5,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
        {
          name: "销售部",
          id: 6,
          nextname: "督察部",
          realname: "张三",
          createTime: "2020-01-01",
          updateTime: "2020-01-01",
        },
      ];
      const roleList = [
        { name: "技术", id: 1 },
        { name: "科研", id: 2 },
        { name: "采购", id: 3 },
        { name: "运维", id: 4 },
        { name: "销售", id: 5 },
        { name: "财务", id: 6 },
      ];
      const introList = [
        { name: "所有权限", id: 1 },
        { name: "人事管理", id: 2 },
        { name: "日常事务", id: 3 },
        { name: "财务管理", id: 4 },
        { name: "所有权限", id: 5 },
        { name: "销售信息", id: 6 },
      ];
      const menuList = [
        {
          id: 1,
          name: "系统总览",
          type: 1,
          icon: "Setting",
          url: "/main/analysis",
          children: [
            {
              id: 11,
              type: 2,
              icon: "Star",
              name: "核心技术",
              url: "/main/analysis/overview",
            },
            {
              id: 12,
              type: 2,
              icon: "ShoppingBag",
              name: "商品统计",
              url: "/main/analysis/dashboard",
            },
          ],
        },
        {
          id: 2,
          name: "系统管理",
          type: 1,
          icon: "Operation",
          url: "/main/system",
          children: [
            {
              id: 21,
              type: 2,
              icon: "Star",
              name: "用户管理",
              url: "/main/system/user",
            },
            {
              id: 22,
              type: 2,
              icon: "ShoppingBag",
              name: "部门管理",
              url: "/main/system/department",
            },
            {
              id: 23,
              type: 2,
              icon: "Star",
              name: "菜单管理",
              url: "/main/system/menu",
            },
            {
              id: 24,
              type: 2,
              icon: "ShoppingBag",
              name: "角色管理",
              url: "/main/system/role",
            },
          ],
        },
        {
          id: 3,
          name: "商品中心",
          type: 1,
          icon: "SoldOut",
          url: "/main/product",
          children: [
            {
              id: 31,
              type: 2,
              icon: "Star",
              name: "商品列表",
              url: "/main/product/category",
            },
            {
              id: 32,
              type: 2,
              icon: "ShoppingBag",
              name: "商品信息",
              url: "/main/product/goods",
            },
          ],
        },
        {
          id: 4,
          name: "关于我们",
          type: 1,
          icon: "Grid",
          url: "/main/story",
          children: [
            {
              id: 41,
              type: 2,
              icon: "Soccer",
              name: "你的故事",
              url: "/main/story/chat",
            },
            {
              id: 42,
              type: 2,
              icon: "ShoppingBag",
              name: "关于我们",
              url: "/main/story/list",
            },
          ],
        },
      ];

      commit("changeEntireDeparTment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeEntireintro", introList);
      commit("changeEntireMenu", menuList);
    },
  },
  modules: {
    login,
    system,
    dashboard,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLigon");
  // store.dispatch("getInitialDataAction");
}

export function userStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
