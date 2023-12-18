
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-waf0bmn-W5PqkZzQ_VQBReCn-6Or-gU",
  authDomain: "productosapp-5f4be.firebaseapp.com",
  projectId: "productosapp-5f4be",
  storageBucket: "productosapp-5f4be.appspot.com",
  messagingSenderId: "578452425462",
  appId: "1:578452425462:web:0fe8495853f161eee17ad7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);