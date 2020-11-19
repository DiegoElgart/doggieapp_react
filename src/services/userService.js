/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export function getJwt() {
  return sessionStorage.getItem(tokenKey);
}

export function logout() {
  sessionStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = sessionStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth/signin`, {
    email,
    password,
  });
  sessionStorage.setItem(tokenKey, data.token);
  return data.token;
}

export async function getUserData(id) {
  const userObj = await http.get(`${apiUrl}/user/${id}`);
  return userObj;
}

export default { login, getCurrentUser, logout, getJwt, getUserData };
