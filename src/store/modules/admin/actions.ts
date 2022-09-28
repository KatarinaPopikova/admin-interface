import User from "../../../api/user";

export const getUserDetail = ({ commit }) => {
  User.detail().then((response) => {
    commit("SET_USER", response.data);
  });
};
