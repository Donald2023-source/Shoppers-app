// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPki6509OP3whoG-Jz3pZZciSxVNcCHB0",
  authDomain: "shoppers-9d36e.firebaseapp.com",
  projectId: "shoppers-9d36e",
  storageBucket: "shoppers-9d36e.firebasestorage.app",
  messagingSenderId: "298589301477",
  appId: "1:298589301477:web:e55aa4be6f3b785644420c",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
