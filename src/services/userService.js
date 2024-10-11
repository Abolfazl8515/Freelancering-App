import http from "./httpService";

export const getUsersApi = () => {
  return http.get("/admin/user/list").then(({ data }) => data.data);
};

export const changeUserStatusApi = ({ id, status }) => {
  return http
    .patch(`/admin/user/verify/${id}`, status)
    .then(({ data }) => data.data);
};
