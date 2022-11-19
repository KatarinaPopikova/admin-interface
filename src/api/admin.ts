import axios from "axios";
import { Api } from "@/api/axios";

const END_POINT = "user/";

export default {
  async detail() {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.data[0];
        }
      });
  },
  store(data) {
    return Api.post(END_POINT, data);
  },
};
