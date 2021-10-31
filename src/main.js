import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router/index";
import firebase from "firebase/compat/app";
import "firebase/analytics";
import "@fortawesome/fontawesome-free/js/all.js";
import "./index.css";
const firebaseConfig = {
  apiKey: "AIzaSyAXBeXr3uYFpnOOjzU2nkXWLrRWcVFGcOw",
  authDomain: "kartu-tahu.firebaseapp.com",
  projectId: "kartu-tahu",
  storageBucket: "kartu-tahu.appspot.com",
  messagingSenderId: "889365748455",
  appId: "1:889365748455:web:d2ca521ecd57e11ad9a042",
  measurementId: "G-CFXH6QPJJ3",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics;
const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router);
app.mount("#app");
