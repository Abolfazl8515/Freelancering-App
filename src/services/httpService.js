import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: axiosConfig.get,
  post: axiosConfig.post,
  delete: axiosConfig.delete,
  put: axiosConfig.put,
  patch: axiosConfig.patch,
};

export default http;
