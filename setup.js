import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLYaQGziXqhAUrgnGZuZ1bpGwjMGvvS_k",
    authDomain: "finalz-9ff36.firebaseapp.com",
    projectId: "finalz-9ff36",
    storageBucket: "finalz-9ff36.appspot.com",
    messagingSenderId: "349592381998",
    appId: "1:349592381998:web:e0ab8529ceabeccb568dbf"
    //Configs will be here
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default () => {
    return {firebase, auth};
}

// We export default to directly use it in our App.js file