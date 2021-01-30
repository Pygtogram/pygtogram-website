import * as axios from 'axios';
import {ConcordanceLoadingStatus} from '../../store/state';
const BACKEND_API_URL = 'https://ndanzrubpj.execute-api.eu-west-3.amazonaws.com/production';

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
    this.store.commit('updateConcordanceResults', []);

    const formData = new FormData();
    formData.append('content', content);

    axios.post(`${BACKEND_API_URL}/concordance`, {'query': content},
        {'Content-Type': 'application/json'})
        .then((response) => {
          this.store.commit('updateConcordanceResults', response.data.body);
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.COMPLETE);
        })
        .catch((error) => {
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.ERROR);
        });
  }
}
