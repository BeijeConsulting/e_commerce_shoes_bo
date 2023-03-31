import { PRODUCTS_PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
  putDataAuth,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";
import { any } from "prop-types";

async function getProducts() {
  return await getData(PRODUCTS_PROPERTIES.BASE_URL + "/products");
}

async function getProductsAuth(page, perPage, lang) {
  return await getDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL +
      `/products/page=${page}/perPage=${perPage}/${lang}`
  );
}

async function getProductById(id, lang) {
  return await getData(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/${id}/${lang}`
  );
}

async function getDetailProduct(id) {
  return await getData(PRODUCTS_PROPERTIES.DETAIL_URL + `/${id}`);
}

async function addProductAuth(obj) {
  return await postDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/add`,
    obj
  );
}

async function editProductByIdAuth(id, obj) {
  return await putDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/update/${id}`,
    obj
  );
}

export {
  getProducts,
  getProductById,
  getDetailProduct,
  getProductsAuth,
  addProductAuth,
  editProductByIdAuth,
};
