// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMinc15Y_6EhRmr0ooWYqd0tw1nk6PR80",
  authDomain: "ehanflixgpt.firebaseapp.com",
  projectId: "ehanflixgpt",
  storageBucket: "ehanflixgpt.appspot.com",
  messagingSenderId: "135230703143",
  appId: "1:135230703143:web:cbbc10b1f64d4da01fb002",
  measurementId: "G-9PGCW1Q3YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();