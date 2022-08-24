import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN03MSPw7K-gLfq0HaoQCy0pYL8KVydcw",
  authDomain: "nextjs-firebase-auth-f6f9e.firebaseapp.com",
  projectId: "nextjs-firebase-auth-f6f9e",
  storageBucket: "nextjs-firebase-auth-f6f9e.appspot.com",
  messagingSenderId: "858406778602",
  appId: "1:858406778602:web:98fd5138b991acd6a50993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()