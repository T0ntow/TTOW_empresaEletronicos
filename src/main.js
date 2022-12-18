import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA1icqWsJBVND3y167GsGoFIVZEDMVnL2w",
    authDomain: "login-logout-daa1a.firebaseapp.com",
    projectId: "login-logout-daa1a",
    storageBucket: "login-logout-daa1a.appspot.com",
    messagingSenderId: "195840212667",
    appId: "1:195840212667:web:cc240a01a5cb23c6a4b39e"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
.use(router)
.mount('#app');
