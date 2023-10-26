// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQOBtBReWm_b2vAo_27ktz0EDdp84cLig",
  authDomain: "netplay-video.firebaseapp.com",
  projectId: "netplay-video",
  storageBucket: "netplay-video.appspot.com",
  messagingSenderId: "667347941914",
  appId: "1:667347941914:web:b0e9f91ee81208e8a22fa3",
  measurementId: "G-PSN7CR82R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);