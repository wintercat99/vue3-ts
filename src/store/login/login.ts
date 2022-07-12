import { Module } from "vuex";
import {
  accountLoginRequest,
  requesrUserInfoById,
} from "@/service/login/login";
import { IAccount } from "@/service/login/type";
import localCache from "@/utils/cache";
import { IRootState } from "../type";
import { ILoginState } from "./type";
import { mapMenusToRoutes } from "@/utils/mapMenus";
import router from "@/router";

const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    // changeUserInfo(state, userInfo: any) {
    //   state.userInfo = userInfo
    // },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      const routes = mapMenusToRoutes(userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    },
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //1、实现登录
      // const loginResult = await accountLoginRequest(payload)
      // console.log('登录信息', loginResult)
      // const { id, token } = loginResult.data
      // commit('changeToken', token)
      // localCache.setCache('token', token)
      //2、请求用户信息
      // const userInfoResuls = await requesrUserInfoById(id)
      // const userInfo = userInfoResuls.data
      // commit('changeUserInfo', userInfo)
      // console.log('用户信息', userInfo)
      const token = true;
      commit("changeToken", token);
      localCache.setCache("token", token);

      //发送初始化请求
      dispatch("getInitialDataAction", null, { root: true });
      //跳转首页
      router.push("./main");
    },
    loadLocalLigon({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
        dispatch("getInitialDataAction", null, { root: true });
      }
      // const userInfo = localCache.getCache("userInfo");
      // if (userInfo) {
      //   commit("changeUserInfo", userInfo);
      // }
      const userMenus = [
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
      commit("changeUserMenus", userMenus);
    },
    //手机验证登录
    phoneLoginActive({ commit }, payload: any) {
      console.log("执行phoneLoginActive", payload);
    },
  },
};
export default LoginModule;
