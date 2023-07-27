
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwq7BKDkYyUAAC-MnMyO73GO_rtOD9TG0",
  authDomain: "essay-f29af.firebaseapp.com",
  projectId: "essay-f29af",
  storageBucket: "essay-f29af.appspot.com",
  messagingSenderId: "144915180450",
  appId: "1:144915180450:web:56052d5d71016aa680a0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = new getFirestore(app)