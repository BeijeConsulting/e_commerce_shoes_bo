import { PROPERTIES } from "../utils/properties";

import { getData } from "../genericAxios/genericAxios";

async function getCoupons() {
  return await getData(
    PROPERTIES.BASE_URL + "/coupons/list_coupons",
    PROPERTIES.API_KEY
  );
}

async function getCouponById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/coupons/search_coupon?id=${id}`,
    PROPERTIES.API_KEY
  );
}

export { getCoupons, getCouponById };
