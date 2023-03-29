import { PROPERTIES } from "../utils/properties";

import { getData, getDataAuth } from "../genericAxios/genericAxios";
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

async function getCouponById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/coupons/search_coupon?id=${id}`,
    PROPERTIES.API_KEY
  );
}

export { getCoupons, getCouponById, getCouponsAuth };
