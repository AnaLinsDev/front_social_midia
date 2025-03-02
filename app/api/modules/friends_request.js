import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getMyFriendsRequest(bodyData) {
  const errorMessage = "Read Friends Request failed: ";
  const method = "GET";
  return apiRequest(
    apiConfig.endpoints.friendRequests,
    bodyData,
    method,
    errorMessage
  );
}

async function sendFriendRequest(bodyData) {
  const errorMessage = "Send Friend Request failed: ";
  const method = "POST";
  return apiRequest(
    apiConfig.endpoints.friendRequest,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function acceptFriendRequest(bodyData) {
  const errorMessage = "Accept Friend Request failed: ";
  const method = "POST";
  return apiRequest(
    apiConfig.endpoints.friendRequest,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function refuseFriendRequest(bodyData) {
    const errorMessage = "Refuse Friend Request failed: ";
    const method = "POST";
    return apiRequest(
      apiConfig.endpoints.friendRequest,
      bodyData,
      method,
      errorMessage
    );
  }


export { getMyFriendsRequest, sendFriendRequest, acceptFriendRequest, refuseFriendRequest };
