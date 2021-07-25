import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDcO-LYHAEYbl00Zk-kMZMV3IYYWNJCCy8",
    authDomain: "quizbuzz-c1134.firebaseapp.com",
    databaseURL: "https://quizbuzz-c1134-default-rtdb.firebaseio.com",
    projectId: "quizbuzz-c1134",
    storageBucket: "quizbuzz-c1134.appspot.com",
    messagingSenderId: "398662709434",
    appId: "1:398662709434:web:ef431483964926714bd283"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()