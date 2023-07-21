import getJobClient from "./api-fecth";
import { tokenKey } from "../config";

export async function login(credentials) {
  const { token, ...user } = await getJobClient("login/professionals", {
    method: "POST",
    body: credentials,
  });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await getJobClient("logout/professionals", { method: "DELETE" });
}

export async function getUser() {
  const { token, ...user } = await getJobClient("profile/professionals", {
    method: "GET",
  });
  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await getJobClient("profile/professionals", {
    method: "PATCH",
    body: userData,
  });
  return user;
}
