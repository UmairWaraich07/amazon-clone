import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTUBEfopCVVWEVoX4A-v78Hf3IHtlA4R0",
  authDomain: "clone-6ce5f.firebaseapp.com",
  projectId: "clone-6ce5f",
  storageBucket: "clone-6ce5f.appspot.com",
  messagingSenderId: "77031527941",
  appId: "1:77031527941:web:b84b67510e409f89d82e6c",
  measurementId: "G-3W1CMDTJSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default db;
