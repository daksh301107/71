import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDRuAdr43Tr5-Dfw1ZyFeoghpRAOj7kugc",
    authDomain: "wireless-library-bdfb6.firebaseapp.com",
    databaseURL: "https://wireless-library-bdfb6.firebaseio.com",
    projectId: "wireless-library-bdfb6",
    storageBucket: "wireless-library-bdfb6.appspot.com",
    messagingSenderId: "1097807703865",
    appId: "1:1097807703865:web:1e8fcbdd3a272bfbc282e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
