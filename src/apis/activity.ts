import { Api } from "./axios";

const END_POINT = "posts";

export default {
  all() {
    return Api.get(END_POINT);
  },

  store(data) {
    return Api.post(END_POINT, data);
  },

  delete(id) {
    return Api.delete(`${END_POINT}/${id}`);
  },

  deleteAll() {
    return Api.delete(END_POINT);
  },
};
