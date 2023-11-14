// firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA3KH7VYfgGNZSLC0ZF_Gy0boWc_u_Ehq0",
  authDomain: "crosscheck-test.firebaseapp.com",
  projectId: "crosscheck-test",
  storageBucket: "crosscheck-test.appspot.com",
  messagingSenderId: "960475177247",
  appId: "1:960475177247:web:811f3e54fe1f428cfe102a",
  measurementId: "G-H0EMM05DCW",
};

const firebaseApp = initializeApp(firebaseConfig);
console.log({ firebaseApp });
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };
