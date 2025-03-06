import apiConfig from "./api_config.js";

async function apiRequest(endpoint, bodyData, method, token, errorMessage) {
  try {


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

    const responseData = await response.json();

    return {
      status: response.status,
      data: responseData,
    };
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

export default apiRequest;
