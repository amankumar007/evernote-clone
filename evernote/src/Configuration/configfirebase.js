import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDc-Cz5Bw_sfT2g_M9-yYnDYYgAY4YoBOI",
    authDomain: "evernote-clone-6d2bb.firebaseapp.com",
    databaseURL: "https://evernote-clone-6d2bb-default-rtdb.firebaseio.com",
    projectId: "evernote-clone-6d2bb",
    storageBucket: "evernote-clone-6d2bb.appspot.com",
    messagingSenderId: "371600729804",
    appId: "1:371600729804:web:2aa14aae29996da3c18469"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase