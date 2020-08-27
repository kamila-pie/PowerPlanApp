import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDhX9xrwpkOx-i4k1V4cv-WomZ_ss4nAyE",
    authDomain: "kamila-powerplanapp.firebaseapp.com",
    databaseURL: "https://kamila-powerplanapp.firebaseio.com",
    projectId: "kamila-powerplanapp",
    storageBucket: "kamila-powerplanapp.appspot.com",
    messagingSenderId: "144712585766",
    appId: "1:144712585766:web:193fca2ec0b00d41864ce7",
    measurementId: "G-5L5KH5RJ3D"
};

export const fireBase = firebase.initializeApp(firebaseConfig);
