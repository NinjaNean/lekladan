// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_dFM_GbOGvXnTnufrxX19g8u_cVdCwd4",
  authDomain: "lekladan-6070d.firebaseapp.com",
  projectId: "lekladan-6070d",
  storageBucket: "lekladan-6070d.firebasestorage.app",
  messagingSenderId: "519712105099",
  appId: "1:519712105099:web:6b7deefe170c732ac56a8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
