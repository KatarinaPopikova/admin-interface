export const isStateChanged = (state) => {
  return !(
    state.email === state.originalEmail &&
    state.phone === state.originalPhone &&
    state.address === state.originalAddress
  );
};
