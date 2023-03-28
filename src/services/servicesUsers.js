import { PROPERTIES } from "../utils/properties";

import {
  getData,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";

async function getUsers(page, size) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}`,
    PROPERTIES.API_KEY
  );
}

async function getUserById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=0/size=1?id=${id}`,
    PROPERTIES.API_KEY
  );
}

async function getEmployees(page, size) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=0/size=10?staff=true`,
    PROPERTIES.API_KEY
  );
}

// http://shoesshop.eu-south-1.elasticbeanstalk.com/search/page=0/size=1?id=5

export { getUsers, getUserById, getEmployees };
