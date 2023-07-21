// import { tokenKey } from "../config";
import getJobClient from "./api-fecth";

export async function createUser(userData) {
  const { token, ...user } = await getJobClient("/signup/professionals", {
    method: "POST",
    body: userData,
  });

  return user;
}

export async function getUser() {
  const { token, ...user } = await getJobClient("/profile/professionals");

  return user;
}
