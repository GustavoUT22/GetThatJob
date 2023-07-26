import getJobClient from "./api-fecth";
import { tokenKey } from "../config";
import getCvClient from "./cv-fecth";

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

export async function createUser(userData) {
  const { token, ...user } = await getJobClient("signup/professionals", {
    method: "POST",

    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await getJobClient("profile/professionals", {
    method: "GET",
  });
  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await getCvClient("profile/professionals", {
    method: "PATCH",
    body: userData,
  });
  return user;
}

export async function updateSignupUser(userData) {
  const { token, ...user } = await getJobClient("signup/professionals", {
    method: "PATCH",
    body: userData,
  });
  return user;
}
