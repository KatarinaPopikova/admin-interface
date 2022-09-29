import axios from "axios";

export default {
  detail() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status != 200) {
          throw response.status;
        } else {
          console.log(response.data[0]);
          return response.data[0];
        }
      });
  },
};
