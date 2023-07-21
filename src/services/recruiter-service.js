import getJobClient from "./api-fecth";
import { tokenKey } from "../config";

export async function loginRecruiter(credentials) {
  const { token, ...user } = await getJobClient("login/recruiters", {
    method: "POST",
    body: credentials,
  });
  // console.log(token);
  // console.log(user);
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

export async function createUser(userData) {
  const { token, ...user } = await getJobClient("signup/recruiters", {
    method: "POST",
    body: userData,
  });

  return user;
}

export async function getRecruiter() {
  const { token, ...recruiter } = await getJobClient("/profile/recruiters", {
    method: "GET",
  });

  return recruiter;
}

export async function updateRecruiter(recruiterData) {
  const { token, ...recruiter } = await getJobClient("/profile/recruiters", {
    method: "PATCH",
    body: recruiterData,
  });

  return recruiter;
}
