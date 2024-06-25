// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZEn1wSYz0euG2jfZPBp52uqGVAI7Wzwg",
  authDomain: "login-signup-project-4263d.firebaseapp.com",
  projectId: "login-signup-project-4263d",
  storageBucket: "login-signup-project-4263d.appspot.com",
  messagingSenderId: "651662423102",
  appId: "1:651662423102:web:08902572f8aca404a50d6f",
  measurementId: "G-5DMJXCRTXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;