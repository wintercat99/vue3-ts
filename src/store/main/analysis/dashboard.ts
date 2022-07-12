import { Module } from "vuex";
import {
  getCategotyCount,
  getCategotySale,
  getCategotyFavor,
  getAddressSale,
} from "@/service/main/analysis/adashboard";
import { IDashboardSate } from "./types";
import { IRootState } from "../../type";

const dashboardModule: Module<IDashboardSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSales: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSales(state, list) {
      state.categoryGoodsSales = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    },
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      // const categoryCountResult = await getCategotyCount();
      const categoryCountResult = [
        {
          name: "北京",
          value: 25,
        },
        {
          name: "上海",
          value: 20,
        },
        {
          name: "广州",
          value: 18,
        },
        {
          name: "深圳",
          value: 15,
        },
        {
          name: "未知",
          value: 13,
        },
        {
          name: "海外",
          value: 9,
        },
      ];
      const categorySaleResult = [
        { name: "100", value: 800 },
        { name: "200", value: 900 },
        { name: "20", value: 220 },
        { name: "30", value: 130 },
        { name: "60", value: 660 },
        { name: "90", value: 289 },
      ];
      const categoryFavorResult = [{}];
      const addressSaleResult = [
        {
          name: "海南",
          value: 99925.73,
        },
        {
          name: "河南",
          value: 17737.01,
        },
        {
          name: "河北",
          value: 13177.64,
        },
        {
          name: "湖北",
          value: 12174.96,
        },
        {
          name: "广东",
          value: 8230.15,
        },
        {
          name: "湖南",
          value: 8173.05,
        },
        {
          name: "江西",
          value: 7423.08,
        },
        {
          name: "黑龙江",
          value: 6829.69,
        },
        {
          name: "四川",
          value: 6158.43,
        },
        {
          name: "安徽",
          value: 5930.8,
        },
      ];
      commit("changeCategoryGoodsCount", categoryCountResult);
      // const categorySaleResult = await getCategotySale();
      commit("changeCategoryGoodsSales", categorySaleResult);
      // const categoryFavorResult = await getCategotyFavor();
      commit("changeCategoryGoodsFavor", categoryFavorResult);
      // const addressSaleResult = await getAddressSale();
      commit("changeAddressGoodsSale", addressSaleResult);
    },
  },
};

export default dashboardModule;
