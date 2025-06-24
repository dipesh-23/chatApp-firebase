// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALoGwnuGi-DTK8TpLhpEKNmFYW9F37mLw",
  authDomain: "chatapp-8f658.firebaseapp.com",
  projectId: "chatapp-8f658",
  storageBucket: "chatapp-8f658.firebasestorage.app",
  messagingSenderId: "878806568196",
  appId: "1:878806568196:web:34d4334a45f9a01bce5451",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
