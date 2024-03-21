import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-6e475.firebaseapp.com",
  projectId: "blog-6e475",
  storageBucket: "blog-6e475.appspot.com",
  messagingSenderId: "93631176922",
  appId: "1:93631176922:web:d8c532aaaa550b44b1c5e3",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)