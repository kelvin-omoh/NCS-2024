import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBFaboX6_uuXN5DtgOg2YF3ca4zkx4Yg8",
  authDomain: "learn-verse-4aa5c.firebaseapp.com",
  projectId: "learn-verse-4aa5c",
  storageBucket: "learn-verse-4aa5c.appspot.com",
  messagingSenderId: "625664585746",
  appId: "1:625664585746:web:7fa9419efd6a12f22168cb",
  measurementId: "G-J8BQYLTXW1"
};

const app = initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)