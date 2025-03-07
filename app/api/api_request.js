import apiConfig from "./api_config.js";

async function apiRequest(
  endpoint,
  bodyData,
  parameterData,
  method,
  token,
  errorMessage
) {
  try {
    let url = `${apiConfig.baseUrl}:${apiConfig.port}${endpoint}`;

    if (parameterData && Object.keys(parameterData).length > 0) {

      const queryParams = new URLSearchParams();

      for (const key in parameterData) {
        queryParams.append(key, parameterData[key]);
      }
      url += `?${queryParams.toString()}`;
    }

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
