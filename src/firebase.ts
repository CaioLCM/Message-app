// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD40G3tfdYSoesDlOSrlvw1a3RxTRvfjZ0",
  authDomain: "communicationapp-25950.firebaseapp.com",
  projectId: "communicationapp-25950",
  storageBucket: "communicationapp-25950.firebasestorage.app",
  messagingSenderId: "127550784884",
  appId: "1:127550784884:web:97ea2d755ff845ad9a1821",
  measurementId: "G-TN7WPK55H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;