import http from "./httpService";

export const getCategoryApi = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};
