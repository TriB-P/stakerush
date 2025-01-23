//Fonction qui retourne tous les utilisateurs qui ont rejoint une ligue en particulier

import  callFirebase  from './callFirebase'; 

const leagueJoinedUsers = async (leagueID) => {
  try {
    // Appel à Firebase pour récupérer les données à partir du path
    const data = await callFirebase('Leagues/'+leagueID+'/Members');

    // Filtrer les clés dont la valeur est 'Joined'
    const joinedUsers = Object.entries(data)
      .filter(([key, value]) => value === 'Joined')
      .map(([key]) => key); // Extraire uniquement les clés

    return joinedUsers;
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    return {};
  }
};

export default leagueJoinedUsers;
