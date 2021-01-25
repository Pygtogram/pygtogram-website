import {createWebHistory, createRouter} from 'vue-router';

import Concordance from './concordance/Concordance';

const routes = [
  {path: '/concordance', component: Concordance},
  {path: '/', redirect: '/concordance'},
];

// Routeur de l'application
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
