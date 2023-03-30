import { PRODUCTS_PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  deleteDataAuth,
  postDataAuth,
  putDataAuth,
} from "../genericAxios/genericAxios";
import { any } from "prop-types";

async function getProducts() {
  return await getData(PRODUCTS_PROPERTIES.BASE_URL + "/products");
}

async function getProductsAuth(page, perPage) {
  return await getDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/page=${page}/perPage=${perPage}`
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
    PRODUCTS_PROPERTIES.BASE_URL + `/products/product`,
    obj
  );
}

async function editProductByIdAuth(id, obj) {
  return await putDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/product/${id}`,
    obj
  );
}

async function deleteProductAuthById(id) {
  return await deleteDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/product/${id}`
  );
}

export {
  getProducts,
  getProductById,
  getDetailProduct,
  getProductsAuth,
  addProductAuth,
  editProductByIdAuth,
  deleteProductAuthById,
};
