import User from "../../../api/admin";

export const getUserDetail = ({ commit }) => {
  User.detail().then((response) => {
    commit("SET_USER", response);
  });
};
