// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_g-QSwAAlgXixXNwQOds0Hn02iTqir8",
  authDomain: "buddy-8d12c.firebaseapp.com",
  projectId: "buddy-8d12c",
  storageBucket: "buddy-8d12c.appspot.com",
  messagingSenderId: "138202497032",
  appId: "1:138202497032:web:29c8706822e39a4812d1bd",
  measurementId: "G-ECZRW42Y8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };