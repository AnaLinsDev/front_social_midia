import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getLikes(bodyData) {
  const errorMessage = "Read Likes failed: ";
  const method = "GET";
  const token = "";
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.likes,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

async function setLike(bodyData) {
  const errorMessage = "Change Like/Dislike failed: ";
  const method = "POST";
  const token = "";
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.likes,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getLikes, setLike };
