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
    this.store.commit('updateConcordanceResults', {'top': [], 'words': []});

    const formData = new FormData();
    formData.append('content', content);

    axios.post(`${BACKEND_API_URL}/concordance-simple`, {'query': content},
        {'Content-Type': 'application/json'})
        .then((response) => {
          const results = {
            'top': response.data.body.top,
            'words': response.data.body.words.map((word) => {
              return BackendService.getRegex(word);
            }),
          };

          this.store.commit('updateConcordanceResults', results);
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.COMPLETE);
        })
        .catch((error) => {
          this.store.commit('updateConcordanceLoadingStatus',
              ConcordanceLoadingStatus.ERROR);
        });
  }

  /**
   * Créé une regex pour faire un match sur le mot
   * @param {String} word mot (sans accents)
   * @return {Regexp} regex
   */
  static getRegex(word) {
    /* word = word.replaceAll('a', '[aâà]');
    word = word.replaceAll('e', '[eéèêë]');
    word = word.replaceAll('i', '[iîï]');
    word = word.replaceAll('o', '[oô]');
    word = word.replaceAll('u', '[uûù]');
    word = word.replaceAll('c', '[cç]'); */

    return new RegExp(word, 'ig'); // Ignore la casse
  }
}
