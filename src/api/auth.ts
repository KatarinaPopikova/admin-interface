import { Api } from "./axios";

const END_POINT = "api-token/";

export default {
  async all() {
    return await Api.get(END_POINT);
  },

  async store(data) {
    return await Api.post(END_POINT, data);
  },

  async delete(id) {
    return await Api.delete(`${END_POINT}/${id}`);
  },

  async deleteAll() {
    return await Api.delete(END_POINT);
  },
};
