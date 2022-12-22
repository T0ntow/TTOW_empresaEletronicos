import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as storage from '@google-cloud/storage';

createApp(App)
.use(router)
.mount('#app');

import firebase from "firebase/compat/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1icqWsJBVND3y167GsGoFIVZEDMVnL2w",
    authDomain: "login-logout-daa1a.firebaseapp.com",
    projectId: "login-logout-daa1a",
    storageBucket: "login-logout-daa1a.appspot.com",
    messagingSenderId: "195840212667",
    appId: "1:195840212667:web:cc240a01a5cb23c6a4b39e"
};
firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// const storage = firebase.storage(); 
