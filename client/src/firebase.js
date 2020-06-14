// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDeqdiXI3EGIMQgpCExQbCMTQINd9z7YA",
    authDomain: "joesreactapp.firebaseapp.com",
    databaseURL: "https://joesreactapp.firebaseio.com",
    projectId: "joesreactapp",
    storageBucket: "joesreactapp.appspot.com",
    messagingSenderId: "754076524041",
    appId: "1:754076524041:web:769cd7dae30bf31d79e2d8",
    measurementId: "G-KDCL66T5MK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()