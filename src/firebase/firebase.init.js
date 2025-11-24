// src/firebase/firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebase.config";

export const firebaseInitialization = () => initializeApp(firebaseConfig);

const app = firebaseInitialization();
export const auth = getAuth(app);
export default firebaseInitialization;
