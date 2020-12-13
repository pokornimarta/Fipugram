import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBb-Ac4ITuY6-K7v5vL8BSKEm8QW34Flto",
    authDomain: "fipugram-48ab6.firebaseapp.com",
    projectId: "fipugram-48ab6",
    storageBucket: "fipugram-48ab6.appspot.com",
    messagingSenderId: "135028310650",
    appId: "1:135028310650:web:e5f6e19729802fc716b1c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {
      firebase
  };
