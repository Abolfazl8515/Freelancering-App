import http from "./httpService";

export const changeProposalStatusApi = ({ id, data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};
