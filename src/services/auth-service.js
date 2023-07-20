import { tokenKey } from "../config";

import getJobClient from "./api-fecth";

export async function logout() {
  await getJobClient("/logout", { method: "DELETE" });
}
