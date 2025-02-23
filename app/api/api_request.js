import apiConfig from "./api_config.js";

async function apiRequest(endpoint, bodyData, method, errorMessage) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}:${apiConfig.port}${endpoint}`,
      {
        method: method,
        headers: apiConfig.headers,
        body: JSON.stringify(bodyData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

export default apiRequest;
