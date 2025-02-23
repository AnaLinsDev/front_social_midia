import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getLikes(bodyData) {
  const errorMessage = "Read Likes failed: ";
  const method = "GET";
  return apiRequest(apiConfig.endpoints.likes, bodyData, method, errorMessage);
}

async function setLike(bodyData) {
  const errorMessage = "Change Like/Dislike failed: ";
  const method = "POST";
  return apiRequest(apiConfig.endpoints.likes, bodyData, method, errorMessage);
}

export { getLikes, setLike };
