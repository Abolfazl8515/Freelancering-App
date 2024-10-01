import http from "./httpService";

export const getOwnerProjectsApi = () => {

  return http.get("/project/owner-projects").then(({ data }) => data.data);
};
