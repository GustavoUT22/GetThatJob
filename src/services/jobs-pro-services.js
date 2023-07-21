import getJobClient from "./api-fecth";
export const dataJobs = "jobs";

export async function getJobs() {
  const data = await getJobClient("/jobs", {
    method: "GET",
  });
  localStorage.setItem(dataJobs, JSON.stringify(data));
  return data;
}

export async function showJob(id) {
  const data = await getJobClient(`/jobs/${id}`, {
    method: "GET",
  });
  // localStorage.setItem(dataJobs, JSON.stringify(data));
  return data;
}
// export async function getJobs() {
//   const data = await getJobClient("/jobs", {
//     method: "GET",
//   });
//   localStorage.setItem(dataJobs, JSON.stringify(data));
//   return data;
// }

// export async function getJobs(id) {
//   const data = await getJobClient(`/jobs/${id}`, {
//     method: "GET",
//   });
//   // localStorage.setItem(dataJobs, JSON.stringify(data));
//   return data;
// }
// export async function createContact(
//   newContact = { name, email, number, relation }
// ) {
//   return await apiFetch("contacts", { body: newContact });
// }

// export async function deleteContact(id) {
//   return  await apiFetch(`contacts/${id}`, {
//     method: "DELETE"
//   });
// }

// export async function showContact(id) {
//   return await apiFetch(`contacts/${id}`, {
//     method: "GET"
//   });

// }

// export async function editContact(id, favorite) {
//   return await apiFetch(`contacts/${id}`, {
//     method: "PATCH",
//     body: { favorite: favorite },
//   });
// }

// export async function listContacts() {
//   return await apiFetch(`contacts`, {
//     method: "GET"
//    });
// }
