// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVwIk11W9A7-8QIxJeTmWb1hUqKY9ge8Q",
    authDomain: "technonotifications.firebaseapp.com",
    projectId: "technonotifications",
    storageBucket: "technonotifications.firebasestorage.app",
    messagingSenderId: "390771488298",
    appId: "1:390771488298:web:0d32000a8d2d1f808cf553",
    measurementId: "G-RM0ED071FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };