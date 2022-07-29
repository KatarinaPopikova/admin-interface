import axios from "axios";
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

export { getAPI };
