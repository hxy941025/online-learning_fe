import Cookies from "js-cookie";

const TokenKey = "userToken";
const UserName = "userName";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setUserName(val) {
  return Cookies.set(UserName, val);
}

export function getUserName() {
  return Cookies.get(UserName);
}

export function removeUserName() {
  return Cookies.remove(UserName);
}
