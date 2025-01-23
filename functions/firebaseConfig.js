import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDwAGBOjkBZVAt7hIc1zzCEZBXrAF_Q1JM",
  authDomain: "bettingclub-f0b3b.firebaseapp.com",
  databaseURL: "https://bettingclub-f0b3b-default-rtdb.firebaseio.com",
  projectId: "bettingclub-f0b3b",
  storageBucket: "bettingclub-f0b3b.firebasestorage.app",
  messagingSenderId: "991715384975",
  appId: "1:991715384975:ios:9d210fd65c1828bd7b1afa",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const firestore = getFirestore(app);

// Export firestore for use in other parts of your app
export { firestore };
