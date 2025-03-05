import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";
import {apiRequestLogin, getAccessToken} from "../api_request_login.js"

async function registerUser(bodyData) {
  const errorMessage = "Registration failed: ";
  const method = "POST";
  const token = ""
  return apiRequest(
    apiConfig.endpoints.register,
    bodyData,
    method,
    token,
    errorMessage
  );
}

async function loginUser(bodyData) {
  const errorMessage = "Login failed: ";
  const method = "POST";
  return apiRequestLogin(apiConfig.endpoints.login, bodyData, method, errorMessage);
}

async function logoutUser() {
  const bodyData = {}
  const errorMessage = "Logout failed: ";
  const method = "POST";
  const token = getAccessToken()
  return apiRequest(apiConfig.endpoints.logout, bodyData, method, token, errorMessage);
}

export { registerUser, loginUser, logoutUser };
