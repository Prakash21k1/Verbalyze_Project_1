// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa1Fg3pXdxKLW_0mZtgsLsBfvNlFQHGBw",
  authDomain: "login-signup-app-6a7f9.firebaseapp.com",
  projectId: "login-signup-app-6a7f9",
  storageBucket: "login-signup-app-6a7f9.appspot.com",
  messagingSenderId: "736130357672",
  appId: "1:736130357672:web:68940bc035380862c9e59d",
  measurementId: "G-4XX3PD6DDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);