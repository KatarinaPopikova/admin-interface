import Activity from "../../../api/activity";

export const getActivities = ({ commit }) => {
  Activity.all().then((response) => {
    commit("SET_ACTIVITIES", response.data);
  });
};

export const getActivity = ({ commit }, productId) => {
  Activity.delete(productId).then((response) => {
    commit("SET_ACTIVITY", response.data);
  });
};
