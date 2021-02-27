// Mutations pour le store
export const mutations = {
  updateConcordanceResults(state, results) {
    state.concordanceResults = results.top;
    state.concordanceWords = results.words;
  },
  updateConcordanceLoadingStatus(state, status) {
    state.concordanceLoadingStatus = status;
  },
};
