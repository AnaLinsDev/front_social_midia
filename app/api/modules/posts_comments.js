import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getComments(bodyData) {
  const errorMessage = "Read Comments failed: ";
  const method = "GET";
  const token = "";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

async function addComment(bodyData) {
  const errorMessage = "Add Comment failed: ";
  const method = "POST";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function editComment(bodyData) {
  const errorMessage = "Edit Comment failed: ";
  const method = "PUT";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

// ENDPOINT NÃO EXISTE
async function deleteComment(bodyData) {
  const errorMessage = "Read Feed failed: ";
  const method = "DELETE";
  const token = "";
  const parameterData = "";
  return apiRequest(
    apiConfig.endpoints.comments,
    bodyData,
    parameterData,
    method,
    token,
    errorMessage
  );
}

export { getComments, addComment, editComment, deleteComment };
