import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

// ENDPOINT NÃO EXISTE
async function getMyFriends(bodyData) {
  const errorMessage = "Read Friends List failed: ";
  const method = "GET";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.friendRequests,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function removeFriend(bodyData) {
  const errorMessage = "Remove Friend failed: ";
  const method = "DELETE";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.friendRequest,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getMyFriends, removeFriend };
