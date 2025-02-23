import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getProfile(bodyData) {
  const errorMessage = "Search Posts failed: ";
  const method = "GET";
  return apiRequest(
    apiConfig.endpoints.profiles,
    bodyData,
    method,
    errorMessage
  );
}

async function editProfile(bodyData) {
  const errorMessage = "Profile Edit failed: ";
  const method = "PUT";
  return apiRequest(
    apiConfig.endpoints.profile,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function deleteProfile(bodyData) {
  const errorMessage = "Profile Delete failed: ";
  const method = "DELETE";
  return apiRequest(
    apiConfig.endpoints.register,
    bodyData,
    method,
    errorMessage
  );
}

export { getProfile, editProfile, deleteProfile };
