import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/tailwind.css';
const app = createApp(App);

app.config.globalProperties.$http = axios.create({
  baseURL: 'https://ing-web-pr3.onrender.com/api',  // Cambia esto por la URL correcta de tu API de Next.js
});

app.use(router).mount('#app');