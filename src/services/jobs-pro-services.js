import getJobClient from "./api-fecth";
export const dataJobs = "jobs";

export async function getJobs() {
  const data = await getJobClient("/jobs", {
    method: "GET",
  });
  localStorage.setItem(dataJobs, JSON.stringify(data));
  return data;
}

export async function getJobRecruiter(id) {
  const data = await getJobClient(`/jobs/${id}`, {
    method: "GET",
  });
  // localStorage.setItem(dataJobs, JSON.stringify(data));
  return data;
}

export async function showJob(id) {
  const data = await getJobClient(`/jobs/${id}`, {
    method: "GET",
  });
  localStorage.setItem(dataJobs, JSON.stringify(data));
  return data;
}

export async function deleteJob(id) {
  const data = await getJobClient(`/jobs/${id}`, {
    method: "DELETE",
  });
  return data;
}