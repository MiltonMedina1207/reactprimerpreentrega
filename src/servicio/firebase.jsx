// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxzmNS-WG322kcBh-CmZwKlhflw_ZbWWY",
  authDomain: "entregafinalreactmilton.firebaseapp.com",
  projectId: "entregafinalreactmilton",
  storageBucket: "entregafinalreactmilton.firebasestorage.app",
  messagingSenderId: "950662534328",
  appId: "1:950662534328:web:c062c6ab87f10f6126904d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

