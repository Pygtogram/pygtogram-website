import Vuex from 'vuex';
import {mutations} from './store/mutations';
import {INITIAL_STATE} from './store/state';

export const store = new Vuex.Store({
  state: INITIAL_STATE,
  mutations,
});
