import { createApp } from 'vue';

import App from './App.vue';
import { vSanitizeHtml } from './lib';

const app = createApp(App);
app.directive('sanitize-html', vSanitizeHtml);

app.mount('#app');
