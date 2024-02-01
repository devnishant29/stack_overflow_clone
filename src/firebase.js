// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAV2Nhbf_bDK5vEHKDUM3iLIqJQiR_w2ps",
  authDomain: "stackoverflow-729c2.firebaseapp.com",
  projectId: "stackoverflow-729c2",
  storageBucket: "stackoverflow-729c2.appspot.com",
  messagingSenderId: "649937351378",
  appId: "1:649937351378:web:23d72c03bfd031fc33f30b",
  measurementId: "G-C8YRZ5DR87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();