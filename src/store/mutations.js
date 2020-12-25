// Mutations pour le store
export const mutations = {
  updateConcordanceResults(state, results) {
    state.concordanceResults = results;
  },
  updateConcordanceLoadingStatus(state, status) {
    state.concordanceLoadingStatus = status;
  },
};
