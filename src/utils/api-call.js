import { API_HOST, LOCAL_STORAGE_TOKEN_KEY } from "../constants.js";

export async function apiCall(method, path, payload) {
  const isFile = payload instanceof File;
  const isJSON = payload && !isFile;

  let headers = {};
  let body = undefined;

  //Si es otra cosa que no sea un archivo, se envía como JSON
  if (isJSON) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(payload);
  }

  //Si es un archivo, se envía como FormData
  if (isFile) {
    body = new FormData();
    body.append("file", payload);
  }

  const authToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (authToken) {
    headers["Authorization"] = authToken;
  }

  const response = await fetch(API_HOST + path, {
    method: method.toUpperCase(),
    headers: {
      ...headers,
    },
    body,
  });

  const responseContentType = response.headers.get("content-type");

  if (responseContentType?.startsWith("application/json")) {
    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return data;
  }
}
