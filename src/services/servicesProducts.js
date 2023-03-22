import { PRODUCTS_PROPERTIES } from "../utils/properties";

import {
  getData,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";

async function getProducts() {
  return await getData(PRODUCTS_PROPERTIES.BASE_URL + "/products");
}

async function getProductById(id, lang) {
  return await getData(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/${id}/${lang}`
  );
}

async function getDetailProduct(id) {
  return await getData(PRODUCTS_PROPERTIES.DETAIL_URL + `/${id}`);
}

export { getProducts, getProductById, getDetailProduct };
