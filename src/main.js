// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.scss'
import router from './router/routers';

const app = createApp(App);

// Sử dụng router
app.use(router);

app.mount('#app');
