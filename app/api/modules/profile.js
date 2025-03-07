import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";
import { getAccessToken } from "../api_request_login.js";

async function getProfile(bodyData) {
  const errorMessage = "Search Profile failed: ";
  const method = "GET";
  const token = getAccessToken();
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.profiles,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

async function editProfile(bodyData) {
  const errorMessage = "Profile Edit failed: ";
  const method = "PUT";
  const token = "";
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.profile,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function deleteProfile(bodyData) {
  const errorMessage = "Profile Delete failed: ";
  const method = "DELETE";
  const token = "";
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.register,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getProfile, editProfile, deleteProfile };
