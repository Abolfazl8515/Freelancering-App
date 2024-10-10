import http from "./httpService";

export const changeProposalStatusApi = ({ id, ...data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};

export const getProposlasApi = () => {
  return http.get("/proposal/list").then(({ data }) => data.data);
};

export const careateProposalApi = (data) => {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
};
