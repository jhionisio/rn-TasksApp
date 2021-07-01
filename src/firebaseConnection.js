import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDlmzCvJAUyZMRtMJ7PN1hwbcO8_hVfzl4",
    authDomain: "tarefasa-89481.firebaseapp.com",
    databaseURL: "https://tarefasa-89481-default-rtdb.firebaseio.com",
    projectId: "tarefasa-89481",
    storageBucket: "tarefasa-89481.appspot.com",
    messagingSenderId: "524777955995",
    appId: "1:524777955995:web:d923ec2d3129330c6a1c3e",
    measurementId: "G-7Z48KRMB8V"
};
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;