import { PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
  deleteDataAuth,
} from "../genericAxios/genericAxios";
import { func } from "prop-types";

async function getCoupons() {
  return await getData(
    PROPERTIES.BASE_URL + "/coupons/list_coupons",
    PROPERTIES.API_KEY
  );
}

async function getCouponsAuth(page, size) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/coupons/all/page=${page}/size=${size}`
  );
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

async function deleteCouponByIdAuth(id) {
  return await deleteDataAuth(
    PROPERTIES.BASE_URL + `/coupons/disable_coupon?idcoup=${id}`
  );
}

export {
  getCoupons,
  getCouponById,
  getCouponsAuth,
  addCouponAuth,
  getCouponByIdAuth,
  deleteCouponByIdAuth,
};
