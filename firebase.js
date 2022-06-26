// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyD7lj1CJDfMnXEMZkJ8siDVijubgzQtncs",
    authDomain: "firstapp1-a9f51.firebaseapp.com",
    databaseURL: "https://firstapp1-a9f51-default-rtdb.firebaseio.com",
    projectId: "firstapp1-a9f51",
    storageBucket: "firstapp1-a9f51.appspot.com",
    messagingSenderId: "856548580470",
    appId: "1:856548580470:web:2a75f12ff14d8783015357"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  firebase.analytics();
  export default firebase