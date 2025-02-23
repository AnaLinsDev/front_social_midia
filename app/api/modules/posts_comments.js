import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getComments(bodyData) {
  const errorMessage = "Read Comments failed: ";
  const method = "GET";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    method,
    errorMessage
  );
}

async function addComment(bodyData) {
  const errorMessage = "Add Comment failed: ";
  const method = "POST";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function editComment(bodyData) {
  const errorMessage = "Edit Comment failed: ";
  const method = "PUT";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    method,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function deleteComment(bodyData) {
  const errorMessage = "Read Feed failed: ";
  const method = "DELETE";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    method,
    errorMessage
  );
}

export { getComments, addComment, editComment, deleteComment };
