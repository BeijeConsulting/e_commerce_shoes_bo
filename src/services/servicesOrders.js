import { ORDERS_PROPERTIES, PROPERTIES } from "../utils/properties";

import {
  getData,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";

async function getOrders() {
  return await getData(ORDERS_PROPERTIES.BASE_URL + "all", PROPERTIES.API_KEY);
}

/*async function getOrderById(id, lang) {
  return await getData(
    ORDERS_PROPERTIES.BASE_URL + `/details/${id}/${lang}`
  );
}*/

async function getDetailOrder(id) {
  return await getData(ORDERS_PROPERTIES.DETAIL_URL + `/${id}`);
}

export { getOrders, /*getOrderById,*/ getDetailOrder };
