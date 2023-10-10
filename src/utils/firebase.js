// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd9YRfpK_P2S1cdvcNx4Tfns5JSOnqwBA",
  authDomain: "netflix-clone-737dc.firebaseapp.com",
  projectId: "netflix-clone-737dc",
  storageBucket: "netflix-clone-737dc.appspot.com",
  messagingSenderId: "647444521864",
  appId: "1:647444521864:web:a28660650f8184b4dc903d",
  measurementId: "G-54KTZB2525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);