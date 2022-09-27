import Activity from "../../../apis/activity";

export const getProducts = ({ commit }) => {
  Activity.all().then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  Activity.delete(productId).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};
