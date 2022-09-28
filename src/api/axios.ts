import axios from "axios";
import store from "@/store";
//
// axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer " + localStorage.getItem("access");
const Api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});

Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token && config.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (resp) => {
    return resp;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/sk/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await Api.post("/api-token-refresh/", {
            refresh: localStorage.getItem("refresh"),
          });
          const accessToken = rs.data.access;
          localStorage.setItem("access", accessToken);
          await store.dispatch("autoLogin");
          return Api(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
  }
);

export { Api };
