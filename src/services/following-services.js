import getJobClient from "./api-fecth";

export async function getFollows() {
  const data = await getJobClient("/follows", { method: "GET" });
  return data;
}

export async function postFollows(followData) {
  const data = await getJobClient("/follows", {
    method: "POST",
    body: followData,
  });
  return data;
}

export async function deleteFollows(id) {
  const data = await getJobClient(`/follows/${id}`, { method: "DELETE" });
  return data;
}
