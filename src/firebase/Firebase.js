// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcy1E-EB_8E_KH6u0a48LxqNN-KWwvMnc",
  authDomain: "yt-tutorial-react-c7595.firebaseapp.com",
  projectId: "yt-tutorial-react-c7595",
  storageBucket: "yt-tutorial-react-c7595.firebasestorage.app",
  messagingSenderId: "375220641608",
  appId: "1:375220641608:web:dbdbad33143e0d93081d7d",
  measurementId: "G-KC6KMJ815J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);