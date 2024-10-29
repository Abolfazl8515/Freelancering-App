import http from "./httpService";

export const loginAdmin = (data) => {
  return http.post("/user/loginadmin", data).then(({ data }) => data.data);
};

export const sendOtp = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfile = (data) => {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
};

export const getUser = () => {
  return http.get("/user/profile").then(({ data }) => data.data);
};

export const logoutApi = () => {
  return http.post("/user/logout").then(({ data }) => data.data);
};
