import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDchqIkxolAV6QSqeYXbpTSU5u4wjLMq18",
    authDomain: "react-native-firebase-6d4d0.firebaseapp.com",
    projectId: "react-native-firebase-6d4d0",
    storageBucket: "react-native-firebase-6d4d0.appspot.com",
    messagingSenderId: "234928376194",
    appId: "1:234928376194:web:8c7a9c5a5a6b52c0c3a79b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }