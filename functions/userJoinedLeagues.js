import  callFirebase  from './callFirebase'; 

const userJoinedLeagues = async (username) => {
  try {
    // Appel à Firebase pour récupérer les données à partir du path
    const data = await callFirebase('Users/'+username+'/Leagues');

    // Filtrer les clés dont la valeur est 'Joined'
    const joinedLeagues = Object.entries(data)
      .filter(([key, value]) => value === 'Joined')
      .map(([key]) => key); // Extraire uniquement les clés

    return joinedLeagues;
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    return {};
  }
};

export default userJoinedLeagues;
