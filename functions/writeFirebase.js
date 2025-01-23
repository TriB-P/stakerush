import { firestore } from './firebaseConfig';

export default async function writeFirebase(path, data) {
  console.log("Writing to Firebase : ", path);

  try {
    const response = await fetch(`https://bettingclub-f0b3b-default-rtdb.firebaseio.com/${path}.json`, {
      method: 'PUT', // ou 'POST' selon si tu veux écraser ou ajouter des données
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Conversion des données en JSON pour Firebase
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData; // retourne la réponse de Firebase (par exemple, un identifiant généré)
  } catch (error) {
    console.error('Error writing data to Firebase:', error);
    throw error; // Re-throwing error for upstream handling
  }
}
