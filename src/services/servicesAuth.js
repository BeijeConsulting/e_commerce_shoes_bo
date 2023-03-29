import {
  getData,
  getDataAuth,
  postData,
  postDataAuth,
} from "../genericAxios/genericAxios";
import { getLocalStorage } from "../utils/localStorageUtils";

export async function authCheck() {
  const response = await getData("/check");

  return { status: response?.status, data: response?.data };
}

export async function signin(credentials) {
  const response = await postData("/signin", credentials);

  return { status: response?.status, data: response?.data };
}

export async function signUp(obj) {
  const response = await postData("/signup", obj);

  return { status: response?.status, data: response?.data };
}

export async function signOut() {
  const refreshTokenStorage = getLocalStorage("refreshToken");
  const tokenStorage = getLocalStorage("token");

  const response = await postData(
    "/sign_out",
    { refreshToken: refreshTokenStorage },
    tokenStorage
  );

  return { status: response?.status, data: response?.data };
}

export async function refreshToken() {
  const refreshTokenStorage = getLocalStorage("refreshToken");
  console.log("refreshTokenStorage", refreshTokenStorage);
  const response = await postData("/refresh_token", {
    refreshToken: refreshTokenStorage,
  });

  return { status: response?.status, data: response?.data };
}

export async function getUser(SECRET) {
  const response = await getData("/user", SECRET);

  return { status: response?.status, data: response?.data };
}

// GET user data with Authentication
export async function getUserAuth() {
  const tokenStorage = getLocalStorage("token");
  const response = await getDataAuth("/user", tokenStorage);

  return { status: response?.status, data: response?.data };
}