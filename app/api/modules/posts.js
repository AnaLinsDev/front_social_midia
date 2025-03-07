import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getMyPosts(bodyData) {
  const errorMessage = "Read Posts failed: ";
  const method = "GET";
  const token = ""
  const parameterData = ""
  return apiRequest(apiConfig.endpoints.posts, bodyData, parameterData, method, token, errorMessage);
}

async function addPost(bodyData) {
  const errorMessage = "Add Post failed: ";
  const method = "POST";
  const token = ""
  const parameterData = ""
  return apiRequest(apiConfig.endpoints.posts, bodyData, parameterData, method, token, errorMessage);
}

async function getFeedPosts(bodyData, parameterData) {
  const errorMessage = "Read Feed failed: ";
  const method = "GET";
  const token = ""
  const parameterData = ""
  return apiRequest(
    apiConfig.endpoints.postsFeed,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getMyPosts, addPost, getFeedPosts };
