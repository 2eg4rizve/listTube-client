// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL1Y1fCVpz9eWxSChQHP9llZwlJNaLDuo",
  authDomain: "any-project-a7278.firebaseapp.com",
  projectId: "any-project-a7278",
  storageBucket: "any-project-a7278.appspot.com",
  messagingSenderId: "850652531339",
  appId: "1:850652531339:web:e4dfc610478dd74533a28e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);