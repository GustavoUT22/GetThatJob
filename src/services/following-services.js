import getJobClient from "./api-fecth";

export async function getFollows() {
  const data = await getJobClient("/follows", { method: "GET" });
  return data;
}
