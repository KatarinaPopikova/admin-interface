export const SET_USER = (state, user) => {
  state.email = user.email;
  state.phone = "09" + user.id + "3 123 123";
  state.address =
    user.address.street +
    " " +
    user.address.suite +
    ", " +
    user.address.zipcode +
    " " +
    user.address.city;
};
