import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1icqWsJBVND3y167GsGoFIVZEDMVnL2w",
    authDomain: "login-logout-daa1a.firebaseapp.com",
    projectId: "login-logout-daa1a",
    storageBucket: "login-logout-daa1a.appspot.com",
    messagingSenderId: "195840212667",
    appId: "1:195840212667:web:cc240a01a5cb23c6a4b39e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(App);
export { auth }