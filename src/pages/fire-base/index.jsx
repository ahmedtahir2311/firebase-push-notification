// Your React component
import { useEffect, useState } from "react";
import {
  messaging,
  getToken,
  onMessage,
} from "../firebase-conf/firebaseConfig"; // Adjust the path based on your project structure

const FireBaseApp = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(token);
    if (token) {
      onMessage(messaging, (payload) => {
        console.log(payload);
        displayNotification({ ...payload });
        // ...
      });
    }
  }, [token]);

  const PermissionHandler = () => {
    getToken(messaging, {
      vapidKey:
        "BJK4QAA6-Lxi6yhtPhD9htpLcVonBE8KK7jFQdQz_DUV0-p8M8w3jI7IdxggfoQfMB3nSrsIGcXQdZ8ZD-hnbHo",
    })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          setToken(currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  };

  const displayNotification = ({ notification, data }) => {
    // Use the Notifications API to display the notification
    const options = {
      body: notification.body,
      icon: data.actorImage, // Set the path to your custom icon
      // image: "icon.png", // Set the path to your custom image
      badge: "icon.png", // Set the path to your custom badge
      // data,
    };
    // Check if the browser supports notifications
    if ("Notification" in window && Notification.permission === "granted") {
      const notify = new Notification(notification.title, options);

      notify.onclick = () => {
        window.location.href = data.redirectUrl;
      };
    }
  };

  return <div onClick={PermissionHandler}>Your React FireBaseApp </div>;
};

export default FireBaseApp;

// Request permission for notifications (this may prompt the user)

// messaging().requestPermission();
// // Get the FCM registration token
// const fcmToken = await messaging().getToken();
// console.log("FCM Token:", fcmToken);
