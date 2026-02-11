// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBNUAhGVEX8j9D5ybGFi22FzWgSkk2V58",
  authDomain: "my-portfolio-70c85.firebaseapp.com",
  projectId: "my-portfolio-70c85",
  storageBucket: "my-portfolio-70c85.firebasestorage.app",
  messagingSenderId: "125244874188",
  appId: "1:125244874188:web:a491609831c2906b259169",
  measurementId: "G-5QM16BDNXZ",
};

export const isFirebaseConfigured = !!firebaseConfig?.apiKey && !!firebaseConfig?.projectId;

const app = initializeApp(firebaseConfig);

// ✅ Analytics only when supported (prevents Netlify build/runtime issues)
export let analytics = null;
if (typeof window !== "undefined") {
  analyticsIsSupported()
    .then((ok) => {
      if (ok) analytics = getAnalytics(app);
    })
    .catch(() => {
      analytics = null;
    });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);

export default app;
