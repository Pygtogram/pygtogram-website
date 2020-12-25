import {createApp} from 'vue';

import App from './App.vue';
import {store} from './store';
import {router} from './router';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import 'bulma/css/bulma.min.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
