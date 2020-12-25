import * as axios from 'axios';
import {ConcordanceLoadingStatus} from '../../store/state';
const BACKEND_API_URL = 'http://localhost:5000';

/**
 * Permet d'interroger le backend
 */
export class BackendService {
  /**
   * Constructeur
   * @param {Object} store store
   */
  constructor(store) {
    this.store = store;
  }

  /**
   * Recherche dans la concordance
   * @param {String} content mots/phrase à rechercher
   */
  searchInConcordance(content) {
    this.store.commit('updateConcordanceLoadingStatus',
        ConcordanceLoadingStatus.LOADING);

    const formData = new FormData();
    formData.append('content', content);

    axios.post(`${BACKEND_API_URL}/query`, formData)
        .then((response) => {
          // TODO remove
          response = response.data.map((result) => {
            return result + 1000000;
          });

          this.store.commit('updateConcordanceResults', response);
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.COMPLETE);
        })
        .catch((error) => {
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.ERROR);
        });
  }
}
