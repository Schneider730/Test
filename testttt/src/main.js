import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


createApp(App).use(store).mount('#app');