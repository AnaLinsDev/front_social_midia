import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getNotifications(bodyData) {
  const errorMessage = "Read notifications failed: ";
  const method = "GET";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.notifications,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getNotifications };
