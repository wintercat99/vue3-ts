import { Module } from "vuex";
import { IRootState } from "../type";
import { ISystemState } from "./types";
import {
  deletPageData,
  getPageListData,
  createPageData,
  editPageData,
} from "@/service/main/system/system";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
    };
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount;
    },
    changeRoleList(state, rolelist: any[]) {
      state.roleList = rolelist;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList;
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount;
    },
  },

  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    },
  },

  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      const usersList = [
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: false,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "小李飞刀",
          realname: "李四",
          cellphone: "13333333333",
          enable: false,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "隔壁老王",
          realname: "王五",
          cellphone: "13333333333",
          enable: false,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "偷鸡摸狗",
          realname: "老六",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "法外狂徒",
          realname: "张三",
          cellphone: "13333333333",
          enable: true,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
      ];
      const rolelist = [
        {
          id: 1,
          name: "超级管理员",
          intro: "所有权限",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          id: 2,
          name: "人事",
          intro: "人事管理",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          id: 3,
          name: "运维",
          intro: "日常事务",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          id: 4,
          name: "财务",
          intro: "财务管理",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          id: 5,
          name: "老板",
          intro: "所有权限",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          id: 6,
          name: "销售",
          intro: "销售信息",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
      ];
      const goodsList = [
        {
          name: "香蕉",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          stetus: false,
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "苹果",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          stetus: false,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "橘子",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          stetus: true,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "菠萝",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          stetus: false,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "西瓜",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          stetus: true,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "草莓",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          stetus: true,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "蓝莓",
          oldPrice: 20,
          nwePrice: 10,
          imgUrl:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          stetus: true,
          fileUrl: [],
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
      ];
      const menuList = [
        {
          name: "系统总览",
          type: 1,
          icon: "Setting",
          url: "/main/analysis",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
          children: [
            {
              id: 11,
              type: 2,
              icon: "Star",
              name: "核心技术",
              url: "/main/analysis/overview",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 12,
              type: 2,
              icon: "ShoppingBag",
              name: "商品统计",
              url: "/main/analysis/dashboard",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
          ],
        },
        {
          id: 2,
          name: "系统管理",
          type: 1,
          icon: "Operation",
          url: "/main/system",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
          children: [
            {
              id: 21,
              type: 2,
              icon: "Star",
              name: "用户管理",
              url: "/main/system/user",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 22,
              type: 2,
              icon: "ShoppingBag",
              name: "部门管理",
              url: "/main/system/department",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 23,
              type: 2,
              icon: "Star",
              name: "菜单管理",
              url: "/main/system/menu",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 24,
              type: 2,
              icon: "ShoppingBag",
              name: "角色管理",
              url: "/main/system/role",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
          ],
        },
        {
          id: 3,
          name: "商品中心",
          type: 1,
          icon: "SoldOut",
          url: "/main/product",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
          children: [
            {
              id: 31,
              type: 2,
              icon: "Star",
              name: "商品列表",
              url: "/main/product/category",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 32,
              type: 2,
              icon: "ShoppingBag",
              name: "商品信息",
              url: "/main/product/goods",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
          ],
        },
        {
          id: 4,
          name: "关于我们",
          type: 1,
          icon: "Grid",
          url: "/main/story",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
          children: [
            {
              id: 41,
              type: 2,
              icon: "Soccer",
              name: "你的故事",
              url: "/main/story/chat",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
            {
              id: 42,
              type: 2,
              icon: "ShoppingBag",
              name: "关于我们",
              url: "/main/story/list",
              createAt: "2020-01-01",
              updateAt: "2020-01-01",
            },
          ],
        },
      ];
      const departmentList = [
        {
          name: "技术部",
          id: 1,
          nextname: "督察部",
          realname: "张三",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "人事部",
          id: 2,
          nextname: "督察部",
          realname: "李四",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "运维部",
          id: 3,
          nextname: "督察部",
          realname: "王五",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "财务部",
          id: 4,
          nextname: "督察部",
          realname: "老六",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "采购部",
          id: 5,
          nextname: "督察部",
          realname: "小七",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
        {
          name: "销售部",
          id: 6,
          nextname: "督察部",
          realname: "勾八",
          createAt: "2020-01-01",
          updateAt: "2020-01-01",
        },
      ];
      const usersCount = 10;
      const roleCount = 6;
      const goodsCount = 7;
      const menuCount = 0;
      const departmentCount = 6;

      switch (pageName) {
        case "users":
          commit("changeUsersList", usersList);
          commit("changeUsersCount", usersCount);
          break;
        case "role":
          commit("changeRoleList", rolelist);
          commit("changeRoleCount", roleCount);
          break;
        case "goods":
          commit("changeGoodsList", goodsList);
          commit("changeGoodsCount", goodsCount);
          break;
        case "menu":
          commit("changeMenuList", menuList);
          commit("changeMenuCount", menuCount);
          break;
        case "department":
          commit("changeDepartmentList", departmentList);
          commit("changeDepartmentCount", departmentCount);
          break;
      }
      //发送请求
      // const pageResult = await getPageListData(paylpad.url, paylpad.queryInfo);
      // const { list, totalCount } = pageResult.data;
      // let pageeUrl = `/${pageName}/list`;
      // const changePageName =
      //   pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      // commit(`change${changePageName}List`, list);
      // commit(`change${changePageName}Count`, totalCount);
    },

    async deletPageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageeUrl = `/${pageName}/${id}`;

      //删除数据的请求
      await deletPageData(pageeUrl);

      //重新请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: { offset: 0, size: 10 },
      });
    },

    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      //新建数据的请求
      await createPageData(pageUrl, newData);

      //请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: { offset: 0, size: 10 },
      });
    },

    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData } = payload;
      const pageUrl = `/${pageName}`;

      //编辑数据的请求
      await editPageData(pageUrl, editData);

      //请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: { offset: 0, size: 10 },
      });
    },
  },
};

export default systemModule;
