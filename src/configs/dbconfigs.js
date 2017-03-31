import firebase from 'firebase';

var config = {
 
   apiKey: "AIzaSyDl0eW055NIjqvEYPoVjDFyMPwG4NUPM38",
    authDomain: "inventory-7c33c.firebaseapp.com",
    databaseURL: "https://inventory-7c33c.firebaseio.com",
    storageBucket: "inventory-7c33c.appspot.com",
    messagingSenderId: "957387332054"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
