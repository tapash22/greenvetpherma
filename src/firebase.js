import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDrawBsWKbTYyY5wGQwjxGD_OHxr1Z_YGA",
    authDomain: "greenvet-a846a.firebaseapp.com",
    projectId: "greenvet-a846a",
    storageBucket: "greenvet-a846a.appspot.com",
    messagingSenderId: "153285764930",
    appId: "1:153285764930:web:615e7c31d37e7ff4248adb",
    measurementId: "G-DVFDY73YYN"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export { fb,db };