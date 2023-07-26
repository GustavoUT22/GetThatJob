import { BASE_URL, tokenKey } from "../config";

export default async function getCvClient(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);
  // const token = "G1xBV2tpHQCCn63y13upccWh";

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body,
  };

  const response = await fetch(BASE_URL + endpoint, config);

  let data;

  if (!response.ok) {
    // if (sessionStorage.getItem(tokenKey) && response.status === 401) {
    //   sessionStorage.removeItem(tokenKey);
    //   window.location.reload();
    // }
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
