import { PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
} from "../genericAxios/genericAxios";
import { func } from "prop-types";

async function getCoupons() {
  return await getData(
    PROPERTIES.BASE_URL + "/coupons/list_coupons",
    PROPERTIES.API_KEY
  );
}

async function getCouponsAuth() {
  return await getDataAuth(PROPERTIES.BASE_URL + "/coupons/list_coupons");
}

async function addCouponAuth(obj) {
  return await postDataAuth(
    PROPERTIES.BASE_URL + `/coupons/create_coupon`,
    obj
  );
}

async function getCouponById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/coupons/search_coupon?id=${id}`,
    PROPERTIES.API_KEY
  );
}

async function getCouponByIdAuth(id) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/coupons/search_coupon?id=${id}`
  );
}

export {
  getCoupons,
  getCouponById,
  getCouponsAuth,
  addCouponAuth,
  getCouponByIdAuth,
};
