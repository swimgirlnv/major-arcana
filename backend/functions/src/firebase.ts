// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkncrwVlOqAvxK0YzDUmJpaOveDQV3yWQ",
  authDomain: "major-arcana-68c17.firebaseapp.com",
  projectId: "major-arcana-68c17",
  storageBucket: "major-arcana-68c17.appspot.com",
  messagingSenderId: "240602979",
  appId: "1:240602979:web:911557a02098ba84364d56",
  measurementId: "G-H255TQ2J18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);