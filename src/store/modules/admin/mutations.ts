export const SET_USER = (state, user) => {
  state.email = user.email;
  state.phone = user.phone;
  state.address = user.address;
};
