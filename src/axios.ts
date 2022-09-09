import axios from "axios";
import store from "@/store";
//
// axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer " + localStorage.getItem("access");
const getAPI = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});

getAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token && config.headers) {
      config.headers["Authorization"] = "Bearer " + token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

getAPI.interceptors.response.use(
  (resp) => {
    console.log(resp);
    return resp;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await getAPI.post("/api-token-refresh/", {
            refresh: localStorage.getItem("refresh"),
          });
          console.log("rs");
          console.log(rs);
          console.log(rs.data);
          console.log(rs.data.access);
          const accessToken = rs.data.access;
          console.log("access token:");
          console.log(accessToken);
          localStorage.setItem("access", accessToken);
          store.dispatch("autoLogin");
          return getAPI(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
  }
);

export { getAPI };
