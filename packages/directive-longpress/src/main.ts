import { createApp } from 'vue';

import App from './App.vue';
import { vLongpress } from './lib';

const app = createApp(App);
app.directive('use-longpress', vLongpress);

app.mount('#app');
