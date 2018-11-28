import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCB8goldCsXuIYyLXybDP7GiaXAtrtn_AY",
    authDomain: "fir-practice-81c29.firebaseapp.com",
    databaseURL: "https://fir-practice-81c29.firebaseio.com",
    projectId: "fir-practice-81c29",
    storageBucket: "fir-practice-81c29.appspot.com",
    messagingSenderId: "771989081918"
  };
firebase.initializeApp(config);

export default firebase;