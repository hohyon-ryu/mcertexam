import * as firebase from 'firebase'
import questionModel from './models/question'

let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyC5qDhhHK1JL7TFaudqUbocTkgaQqr04yo",
    authDomain: "mcertexam.firebaseapp.com",
    databaseURL: "https://mcertexam.firebaseio.com",
    projectId: "mcertexam",
    storageBucket: "",
    messagingSenderId: "515886078674"
  };
  firebase.initializeApp(config);
  database = firebase.database()
};