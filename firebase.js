// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (copy from Firebase Console)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "recipe-founder.firebaseapp.com",
  projectId: "recipe-founder",
  storageBucket: "recipe-founder.firebasestorage.app",
  messagingSenderId: "505627617838",
  appId: "1:505627617838:web:0f43ace64ac7b95a8ecdbf",
  measurementId: "G-5DNCWMWMTF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
