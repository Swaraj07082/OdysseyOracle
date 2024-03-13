// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyDeKTffaf6GiP71hsHcGGRcm2OEt_mVokM",
  apiKey: process.env.FIREBASE,

  authDomain: "blog-6e475.firebaseapp.com",
  projectId: "blog-6e475",
  storageBucket: "blog-6e475.appspot.com",
  messagingSenderId: "93631176922",
  appId: "1:93631176922:web:d8c532aaaa550b44b1c5e3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
