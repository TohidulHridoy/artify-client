import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Values come from .env (see .env.example)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const isConfigured = Object.values(firebaseConfig).every(
  
  (value) => typeof value === "string" && value.trim()
);
console.log("Firebase env check:", Object.fromEntries(
  Object.entries(firebaseConfig).map(([key, value]) => [key, value ? "OK" : "MISSING"])
));


export const auth = isConfigured
  ? getAuth(initializeApp(firebaseConfig))
  : null;
