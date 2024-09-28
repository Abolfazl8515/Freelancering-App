import http from "./httpService";

export const sendOtp = (data) => {
  return http.post("/get-otp", data);
};

export const checkOtp = (data) => {
  return http.post("/check-otp", data);
};
