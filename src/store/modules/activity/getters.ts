export const activitiesFilter = (state) => (filterText) => {
  return state.activities.filter((activity) => {
    return activity.title.match(filterText);
  });
};
