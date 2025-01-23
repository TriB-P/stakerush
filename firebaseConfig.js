// Importez Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configuration Firebase (remplacez par vos informations)
const firebaseConfig = {
  apiKey: "AIzaSyDwAGBOjkBZVAt7hIc1zzCEZBXrAF_Q1JM",
  authDomain: "bettingclub-f0b3b.firebaseapp.com",
  databaseURL: "https://bettingclub-f0b3b-default-rtdb.firebaseio.com",
  projectId: "bettingclub-f0b3b",
  storageBucket: "bettingclub-f0b3b.firebasestorage.app",
  messagingSenderId: "991715384975",
  appId: "1:991715384975:ios:9d210fd65c1828bd7b1afa",
};

// Initialisez Firebase si ce n'est pas déjà fait
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export { firestore };
