import http from "./httpService";
import { loginApi } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const config_ = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const user_ = {
    email: email,
    password: password,
  };

  const { data: jwt } = await http.post(loginApi, user_, config_);
  localStorage.setItem(tokenKey, jwt.access_token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt,
};
