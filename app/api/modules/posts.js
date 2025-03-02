import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getMyPosts(bodyData) {
  const errorMessage = "Read Posts failed: ";
  const method = "GET";
  return apiRequest(apiConfig.endpoints.posts, bodyData, method, errorMessage);
}

async function addPost(bodyData) {
  const errorMessage = "Add Post failed: ";
  const method = "POST";
  return apiRequest(apiConfig.endpoints.posts, bodyData, method, errorMessage);
}

async function getFeedPosts(bodyData) {
  const errorMessage = "Read Feed failed: ";
  const method = "GET";
  return apiRequest(
    apiConfig.endpoints.postsFeed,
    bodyData,
    method,
    errorMessage
  );
}

export { getMyPosts, addPost, getFeedPosts };
