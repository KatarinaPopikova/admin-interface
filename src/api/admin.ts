import axios from "axios";

export default {
  detail() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.data[0];
        }
      });
  },
};
