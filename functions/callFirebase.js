import { firestore } from './firebaseConfig';

export default async function callFirebase(path) {
  console.log("Firebase called : ", path);
  
  try {
    const response = await fetch(`https://bettingclub-f0b3b-default-rtdb.firebaseio.com/${path}.json`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // No need to wrap this in a Promise
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    throw error; // Re-throwing error for upstream handling
  }
}
