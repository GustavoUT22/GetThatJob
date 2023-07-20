import { tokenKey } from "../config";
import getJobClient from "./api-fecth";

export async function createUser(userData) {
  const { token, ...user } = await getJobClient("/signup", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await getJobClient("/profile/professionals");

  return user;
}
