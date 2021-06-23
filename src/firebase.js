import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqGkyzKsi0nrrAweUR7UV2_IUoc4JrN_I",
    authDomain: "planfit-9ef2c.firebaseapp.com",
    projectId: "planfit-9ef2c",
    storageBucket: "planfit-9ef2c.appspot.com",
    messagingSenderId: "363071025248",
    appId: "1:363071025248:web:c4832b1fc3be27b49f1305"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();