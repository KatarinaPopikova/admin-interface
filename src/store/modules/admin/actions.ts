import User from "../../../api/admin";

export const getUserDetail = ({ commit }) => {
  User.detail().then((response) => {
    commit("SET_USER", response);
  });
};

export const changeEmail = ({ commit }, email) => {
  commit("SET_EMAIL", email);
};

export const changePhone = ({ commit }, phone) => {
  commit("SET_PHONE", phone);
};

export const changeAddress = ({ commit }, address) => {
  commit("SET_ADDRESS", address);
};
