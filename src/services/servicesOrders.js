import { ORDERS_PROPERTIES, PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";

async function getOrders() {
  return await getData(ORDERS_PROPERTIES.BASE_URL + "all", PROPERTIES.API_KEY);
}

async function getOrdersAuth() {
  return await getDataAuth(ORDERS_PROPERTIES.BASE_URL + "all");
}

/*async function getOrderById(id, lang) {
  return await getData(
    ORDERS_PROPERTIES.BASE_URL + `/details/${id}/${lang}`
  );
}*/

async function getDetailOrder(id) {
  return await getData(ORDERS_PROPERTIES.DETAIL_URL + `/${id}`);
}

export { getOrders, /*getOrderById,*/ getDetailOrder, getOrdersAuth };
