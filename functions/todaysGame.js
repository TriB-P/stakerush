// todaysGame.js

export const todaysGame = async (date) => {
    try {
      const response = await fetch(`https://api-web.nhle.com/v1/score/${date}`);
      if (!response.ok) {
        throw new Error('Failed to fetch game data');
      }
      const data = await response.json();
  
      // Extraire les matchs dans un format simplifié
      return data?.games?.map(game => ({
        id: game.id,
        homeTeam: game.homeTeam.name.default,
        homeScore: game.homeTeam.score,
        awayTeam: game.awayTeam.name.default,
        awayScore: game.awayTeam.score,
        gameDate: game.gameDate,
        gameLink: game.gameCenterLink,
        venue: game.venue.default,
        startTimeUTC: game.startTimeUTC,
      })) || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  