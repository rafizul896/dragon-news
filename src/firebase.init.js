// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHV5eEiFkc0J_BAF5JgeOEd6XoyV8mm6M",
  authDomain: "react-dragon-news-auth-6f525.firebaseapp.com",
  projectId: "react-dragon-news-auth-6f525",
  storageBucket: "react-dragon-news-auth-6f525.appspot.com",
  messagingSenderId: "629748913607",
  appId: "1:629748913607:web:35ce1db9f736451f09b5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;