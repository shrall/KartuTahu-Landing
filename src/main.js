import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css'
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking-inline.css";

const app = createApp(App);
app.use(router);
app.component("Flicking", Flicking);
app.mount("#app");