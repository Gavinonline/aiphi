// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt0yJS_m2TfsNhCKu7L-Ua4_-v4nBV1Ww",
    authDomain: "aiphi-fca8e.firebaseapp.com",
    projectId: "aiphi-fca8e",
    storageBucket: "aiphi-fca8e.firebasestorage.app",
    messagingSenderId: "369924174137",
    appId: "1:369924174137:web:3f43bb1b9b92c455daf8e8",
    measurementId: "G-59K1W5LS4Y"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics }; 