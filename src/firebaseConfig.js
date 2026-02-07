
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBNUAhGVEX8j9D5ybGFi22FzWgSkk2V58",
  authDomain: "my-portfolio-70c85.firebaseapp.com",
  projectId: "my-portfolio-70c85",
  storageBucket: "my-portfolio-70c85.firebasestorage.app",
  messagingSenderId: "125244874188",
  appId: "1:125244874188:web:a491609831c2906b259169",
  measurementId: "G-5QM16BDNXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);

// Check if Firebase is configured (always true since we have config)
export const isFirebaseConfigured = true;

export default app;