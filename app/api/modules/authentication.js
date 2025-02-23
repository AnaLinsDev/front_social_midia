import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function registerUser(bodyData) {
  const errorMessage = "Registration failed: ";
  const method = "POST";
  return apiRequest(
    apiConfig.endpoints.register,
    bodyData,
    method,
    errorMessage
  );
}

async function loginUser(bodyData) {
  const errorMessage = "Login failed: ";
  const method = "POST";
  return apiRequest(apiConfig.endpoints.login, bodyData, method, errorMessage);
}

async function logoutUser(bodyData) {
  const errorMessage = "Logout failed: ";
  const method = "POST";
  return apiRequest(apiConfig.endpoints.logout, bodyData, method, errorMessage);
}

export { registerUser, loginUser, logoutUser };
