import * as firebase from 'firebase'

let database;

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

export const getQuestions = () => {
  // 나중에 관리자 모드를 만들면 live를 토글 해야 할 지도.
  // let questions = database.ref('/questions').orderByChild("live").equalTo(true).once('value');
  return database.ref('/questions').once('value');
};
