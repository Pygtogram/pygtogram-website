// Status de chargement des résultats
export const ConcordanceLoadingStatus = {
  COMPLETE: 'complete',
  LOADING: 'loading',
  ERROR: 'error',
};

// Etat initial du store
export const INITIAL_STATE = {
  concordanceResults: [],
  concordanceLoadingStatus: ConcordanceLoadingStatus.LOADING,
};
