// src/admin/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔴 Replace these with your Firebase project config
// Firebase Console → Project Settings → Your Apps → SDK setup
const firebaseConfig = {
  apiKey: "AIzaSyAYUGrCOag5nFA0yB6DiwblYtX9OZf56Uw",
  authDomain: "librioo-fb90e.firebaseapp.com",
  databaseURL: "https://librioo-fb90e-default-rtdb.firebaseio.com",
  projectId: "librioo-fb90e",
  storageBucket: "librioo-fb90e.firebasestorage.app",
  messagingSenderId: "187759958545",
  appId: "1:187759958545:web:341a657e2c5d95ef1fafb0",
  measurementId: "G-3PTK4M1JSP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;