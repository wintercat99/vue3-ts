import hyRequest from "../../index";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale",
}

export function getCategotyCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount,
  });
}

export function getCategotySale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale,
  });
}

export function getCategotyFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor,
  });
}

export function getAddressSale() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale,
  });
}
