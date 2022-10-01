import User from "../../../api/admin";

export const getUserDetail = ({ commit }) => {
  User.detail().then((response) => {
    commit("SET_USER", {
      email: response.email,
      phone: response.id,
      address:
        response.address.street +
        " " +
        response.address.suite +
        ", " +
        response.address.zipcode +
        " " +
        response.address.city,
    });
  });
};

export const saveNewEmail = ({ commit, state }) => {
  // User.store(state.email).then((response) => {
  //   commit("SET_USER", response);
  // });

  commit("SET_USER", {
    email: state.email,
    phone: state.originalPhone,
    address: state.originalAddress,
  });
};

export const saveNewPhone = ({ commit, state }) => {
  // User.store(state.email).then((response) => {
  //   commit("SET_USER", response);
  // });
  console.log(state);
  commit("SET_USER", {
    email: state.originalEmail,
    phone: state.phone,
    address: state.originalAddress,
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
