import { useState, useEffect } from 'react';
// import { messaging, getToken, onMessage } from './firebase-messaging';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { messaging, getToken, onMessage } from './Config/firebaseMessaging.js'
function App() {
  const [count, setCount] = useState(0);

  const requestFirebaseToken = async () => {
    try {
      // Request browser notification permission
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        console.log("Notification permission denied");
        return;
      }

      // Get FCM token
      const currentToken = await getToken(messaging, { vapidKey: "BIC836m50d3zkJ4wHCnChlPYD0Dh4BPN4N1jUuxsEFpA_VN4f6zHl7-wccG7njARevcLtzJWjmIAssI_llEAIoM" });
      if (currentToken) {
        console.log("FCM Token:", currentToken);

        // Send token + notification data to backend API
        await fetch("http://localhost:5001/api/AndroidApp/add-new-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Hello!",
            body: "Hello from React Web!",
            DeviceToken: currentToken
          })
        });
      } else {
        console.log("No registration token available");
      }
    } catch (err) {
      console.error("Error retrieving token:", err.message);
    }
  };

  // Optional: listen for foreground messages
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React FCM</h1>
      <div className="card">
        <button onClick={requestFirebaseToken}>
          Send Test Notification
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
