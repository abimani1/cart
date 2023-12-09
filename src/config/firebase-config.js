// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDLld-gAL5V3gv0tRzhSoYznNlYec4pg",
  authDomain: "allscart-user-57aa3.firebaseapp.com",
  projectId: "allscart-user-57aa3",
  storageBucket: "allscart-user-57aa3.appspot.com",
  messagingSenderId: "1019083590296",
  appId: "1:1019083590296:web:65f424f3fdfbaa6eca1eed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
