import apiConfig from "./api_config.js";

async function apiRequest(endpoint, bodyData, method, token, errorMessage) {
  try {
    const jsonstring = JSON.stringify(bodyData);

    console.log(jsonstring);

    const url = `${apiConfig.baseUrl}:${apiConfig.port}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`; 
    }

    const response = await fetch(url, {
      method: method,
      headers: headers, 
      body: JSON.stringify(bodyData),
    });

    return response;
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

export default apiRequest;