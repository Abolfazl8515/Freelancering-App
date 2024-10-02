import http from "./httpService";

export const getOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const removeProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};
