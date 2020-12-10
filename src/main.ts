import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner);

const app = createApp(App);
app.use(VueAxios, axios);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');

export default app;
