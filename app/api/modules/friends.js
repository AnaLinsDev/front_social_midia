import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

// ENDPOINT NÃO EXISTE
async function getMyFriends(bodyData) {
  const errorMessage = "Read Friends List failed: ";
  const method = "GET";
  return apiRequest(
    apiConfig.endpoints.friendRequests,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function removeFriend(bodyData) {
  const errorMessage = "Remove Friend failed: ";
  const method = "DELETE";
  return apiRequest(
    apiConfig.endpoints.friendRequest,
    bodyData,
    method,
    errorMessage
  );
}


export { getMyFriends, removeFriend };
