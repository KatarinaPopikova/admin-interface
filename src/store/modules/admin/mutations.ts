export const SET_USER = (state, user) => {
  state.email = user.email;
  state.originalEmail = user.email;

  state.phone = "09" + user.phone + "3 123 123";
  state.originalPhone = "09" + user.phone + "3 123 123";

  state.address = user.address;
  state.originalAddress = user.address;
};

export const SET_EMAIL = (state, email) => {
  state.email = email;
};

export const SET_PHONE = (state, phone) => {
  state.phone = phone;
};

export const SET_ADDRESS = (state, address) => {
  state.address = address;
};
