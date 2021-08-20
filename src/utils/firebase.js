import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDk8ocKAhx5fu9rYwkPP1L4xVKYarhXkUo",
    authDomain: "birthday-bc5da.firebaseapp.com",
    projectId: "birthday-bc5da",
    storageBucket: "birthday-bc5da.appspot.com",
    messagingSenderId: "691335245032",
    appId: "1:691335245032:web:dba523470e06f2ceaeed5d"
  };

  export default firebase.initializeApp(firebaseConfig);