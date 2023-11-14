importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA3KH7VYfgGNZSLC0ZF_Gy0boWc_u_Ehq0",
  authDomain: "crosscheck-test.firebaseapp.com",
  projectId: "crosscheck-test",
  storageBucket: "crosscheck-test.appspot.com",
  messagingSenderId: "960475177247",
  appId: "1:960475177247:web:811f3e54fe1f428cfe102a",
  measurementId: "G-H0EMM05DCW",
});

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
    self.registration.showNotification(title, {
      body,
      icon: image || "/assets/icons/icon-72x72.png",
    });
  });
}
