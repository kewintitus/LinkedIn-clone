// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJ_giyGcBntqxrAXgztr7RmLP7-dWauVw',
  authDomain: 'linkedin-clone-3782c.firebaseapp.com',
  projectId: 'linkedin-clone-3782c',
  storageBucket: 'linkedin-clone-3782c.appspot.com',
  messagingSenderId: '59964483104',
  appId: '1:59964483104:web:0716e006ba1d46f81ffe45',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
