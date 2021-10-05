import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC3klXFCQhI2vRfIMOlBzDViLvNZQ39m_4",
  authDomain: "fire-shopy.firebaseapp.com",
  databaseURL: "https://fire-shopy-default-rtdb.firebaseio.com",
  projectId: "fire-shopy",
  storageBucket: "fire-shopy.appspot.com",
  messagingSenderId: "34592268435",
  appId: "1:34592268435:web:a721c89bd03dd91b6ead66",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
