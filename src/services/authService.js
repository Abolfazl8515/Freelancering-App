import http from "./httpService";

export const sendOtp = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};
