// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAD1fXX79kMNoFtfa_yM0MdEqDnQvVyc4c",
  authDomain: "my-first-product-3b1ba.firebaseapp.com",
  projectId: "my-first-product-3b1ba",
  storageBucket: "my-first-product-3b1ba.appspot.com",
  messagingSenderId: "205337023849",
  appId: "1:205337023849:web:094eecc02be137392dd9f8",
  measurementId: "G-8VTJH8ET73"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();
export { db, auth, provider };
