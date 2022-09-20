import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDHX2lx203SQrxa4Xi7rRHWupppflJebk",
  authDomain: "login-page-1e27e.firebaseapp.com",
  projectId: "login-page-1e27e",
  storageBucket: "login-page-1e27e.appspot.com",
  messagingSenderId: "1017623100023",
  appId: "1:1017623100023:web:49fb676ba6b9ba5c412472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };