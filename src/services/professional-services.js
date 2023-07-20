import getJobClient from "./api-fecth";
import { tokenKey } from "../config";

export async function login(credentials) {
  const { token, ...user } = getJobClient("login/professionals", {
    body: credentials,
  });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  getJobClient("logout/professionals", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
}

// export async function login(credentials) {
//   const { token, ...user } = getJobClient("login/recruiter", {
//     body: credentials,
//   });
//   sessionStorage.setItem(tokenKey, token);
//   return user;
// }

// export async function logout() {
//   getJobClient("logout/professional", { method: "DELETE" });
//   sessionStorage.removeItem(tokenKey);
// }

// export async function createUser(userData) {
//   const { token, ...user } = await getJobClient("signup/professional", {
//     body: userData,
//   });

//   sessionStorage.setItem(tokenKey, token);
//   return user;
// }

// export async function getUser() {
//   const { token, ...user } = await getJobClient("/profile/professionals");

//   return user;
// }

// export async function updateUser(userData) {
//   const { token, ...user } = await getJobClient("/profile/professionals", {
//     method: "PATCH",
//     body: userData,
//   });

//   sessionStorage.setItem(tokenKey, token);
//   return user;
// }
