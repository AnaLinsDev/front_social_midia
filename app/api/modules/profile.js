import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getProfile(bodyData) {
  const errorMessage = "Search Posts failed: ";
  const method = "GET";
  const token = ""
  return apiRequest(
    apiConfig.endpoints.profiles,
    bodyData,
    method,
    token,
    errorMessage
  );
}

async function editProfile(bodyData) {
  const errorMessage = "Profile Edit failed: ";
  const method = "PUT";
  const token = ""
  return apiRequest(
    apiConfig.endpoints.profile,
    bodyData,
    method,
    token,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function deleteProfile(bodyData) {
  const errorMessage = "Profile Delete failed: ";
  const method = "DELETE";
  const token = ""
  return apiRequest(
    apiConfig.endpoints.register,
    bodyData,
    method,
    token,
    errorMessage
  );
}

export { getProfile, editProfile, deleteProfile };
