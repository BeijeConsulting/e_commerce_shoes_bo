import axios from "axios";
import { PROPERTIES } from "../utils/properties";

const axiosInstance = axios.create({
  //istanza
  baseURL: PROPERTIES.BASE_URL,
  timeout: PROPERTIES.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${PROPERTIES.API_KEY}`,
  },
});

export function responseApi(response) {
  //general function for get the response
  return {
    data: response?.data,
    status: response?.status,
  };
}

export function responseApiError(error) {
  //general function in case of wrong api call
  return {
    message: error?.message,
    status: error?.status,
  };
}

export async function postData(resource, obj, header = null) {
  return axiosInstance
    .post(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

export async function getData(resource, header = null) {
  //function for get api call
  return axiosInstance
    .get(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

export async function putData(resource, obj, header = null) {
  //function for put api call
  return axiosInstance
    .put(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

export async function deleteData(resource, header = null) {
  return axiosInstance
    .delete(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}
