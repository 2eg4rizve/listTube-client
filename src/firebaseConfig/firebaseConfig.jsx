// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_KOhmLR8WftsvyG2LmlQdexzoVJA9e6Y",
  authDomain: "listtube-11ac3.firebaseapp.com",
  projectId: "listtube-11ac3",
  storageBucket: "listtube-11ac3.appspot.com",
  messagingSenderId: "603819851979",
  appId: "1:603819851979:web:22e47fb4be8bd6fffd1b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth =getAuth(app);


