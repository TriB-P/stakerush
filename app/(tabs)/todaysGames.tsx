// todaysGame.js
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { todaysGame } from '../../functions/todaysGame.js';

const TodaysGame = () => {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState(null);
  
  // Définir la variable "date" ici
  const date = '2025-01-21'; // Remplace cette valeur par la date souhaitée

  useEffect(() => {
    const getGames = async () => {
      const games = await todaysGame(date);
      if (games.length === 0) {
        setError('No games found for this date.');
      }
      setGameData(games);
    };

    getGames();
  }, [date]); // La variable date est utilisée ici

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (gameData.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Game Scores for {date}</Text>
      {gameData.map((game) => (
        <View key={game.id}>
          <Text>
            {game.homeTeam} vs {game.awayTeam}
          </Text>
          <Text>
            Score: {game.homeScore} - {game.awayScore}
          </Text>
          <Text>Venue: {game.venue}</Text>
          <Text>Start Time: {game.startTimeUTC}</Text>

        </View>
      ))}
    </View>
  );
};

export default TodaysGame;
