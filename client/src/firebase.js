import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86025.firebaseapp.com",
  projectId: "mern-estate-86025",
  storageBucket: "mern-estate-86025.firebasestorage.app",
  messagingSenderId: "1088259577551",
  appId: "1:1088259577551:web:d7ec46da20e733037289ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};