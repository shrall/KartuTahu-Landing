import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css'

const app = createApp(App);
app.use(router);
app.mount("#app");