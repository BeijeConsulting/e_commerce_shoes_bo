import { PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
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

async function getUsersAuth(page, size) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}`
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
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}?staff=true`,
    PROPERTIES.API_KEY
  );
}

async function getEmployeesAuth(page, size) {
  // Possiamo passare qui l'authority dell'utente
  // if (authority !== "admin") {
  //   alert ("You are not authorized to access this page");
  //   return;
  // }
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}?staff=true`
  );
}

// http://shoesshop.eu-south-1.elasticbeanstalk.com/search/page=0/size=1?id=5

export { getUsers, getUserById, getEmployees, getUsersAuth, getEmployeesAuth };
