import { createApp } from 'vue';

import App from './App.vue';
import { vVisible } from './lib/v-visible';

const app = createApp(App);
app.directive('visible', vVisible);

app.mount('#app');
