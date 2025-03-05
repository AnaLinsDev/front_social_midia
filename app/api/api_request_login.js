import apiConfig from "./api_config.js";

async function apiRequestLogin(endpoint, bodyData, method, errorMessage) {
  try {
    const params = new URLSearchParams();
    for (const key in bodyData) {
      params.append(key, bodyData[key]);
    }

    console.log(params.toString());

    const response = await fetch(`${apiConfig.baseUrl}:${apiConfig.port}${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);


    if (response.status === 401 || response.status === 403) {
      console.error("Authentication error:", response.status);
      throw new Error("Authentication failed");
    }

    return response;
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

function getAccessToken() {
  return localStorage.getItem("access_token");
}


export {apiRequestLogin, getAccessToken};