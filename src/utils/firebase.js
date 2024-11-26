// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd5nzN46ZIBpTwzIXdIOW7QncdmBdW9yU",
  authDomain: "netplay-ott.firebaseapp.com",
  projectId: "netplay-ott",
  storageBucket: "netplay-ott.firebasestorage.app",
  messagingSenderId: "113451359607",
  appId: "1:113451359607:web:4b86032477fe476d87d572",
  measurementId: "G-S14PKERDP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);