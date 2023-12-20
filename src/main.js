// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.scss';
import router from './router/routers';
import components from './components';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App);

components.register(app);

app.use(router).use(bootstrap);

app.mount('#app');
