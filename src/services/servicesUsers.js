import { PROPERTIES } from "../utils/properties";

import {
  getData,
  postData,
  putData,
  deleteData,
} from "../genericAxios/genericAxios";

// async function getUsers() {
//   return await getData(PROPERTIES.BASE_URL + "users", PROPERTIES.API_KEY);
// }

async function getUserById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=0/size=1?id=${id}`,
    PROPERTIES.API_KEY
  );
}

// http://shoesshop.eu-south-1.elasticbeanstalk.com/search/page=0/size=1?id=5

export { /*getUsers,*/ getUserById };
