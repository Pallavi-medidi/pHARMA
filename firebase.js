
import "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2L62CWlvEcNzfv-GDHoUZM8nz2R1_VVc",
  authDomain: "pharmacy-website-c0e77.firebaseapp.com",
  databaseURL: "https://pharmacy-website-c0e77-default-rtdb.firebaseio.com",
  projectId: "pharmacy-website-c0e77",
  storageBucket: "pharmacy-website-c0e77.appspot.com",
  messagingSenderId: "286244576940",
  appId: "1:286244576940:web:8bc249696049e680214909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth()
export default app
