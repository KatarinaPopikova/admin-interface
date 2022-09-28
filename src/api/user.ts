import { Api } from "./axios";

const END_POINT = "user/";

export default {
  detail() {
    return Api.get(END_POINT);
  },
};
