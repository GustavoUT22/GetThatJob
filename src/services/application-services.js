import { func } from "prop-types";
import getJobClient from "./api-fecth";

export async function apply(newApply) {
  const data = await getJobClient("/applications", {
    body: newApply,
  });
  return data;
}

export async function getApplications() {
  const data = await getJobClient("/applications", {
    method: "GET",
  });
  return data;
}


export async function deleteApplications(id) {
  return await getJobClient(`/applications/${id}`, {
    method: "DELETE",
  });
}
