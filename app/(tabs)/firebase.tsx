import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import leagueJoinedUsers from '../../functions/leagueJoinedUsers';

const TestScreen = () => {
  const handlePress = () => {
    const variable = 'LEA1'; 

    leagueJoinedUsers(variable)
      .then((data) => {
        Alert.alert('Succès', `Données lues : ${JSON.stringify(data)}`);
      })
      .catch((error) => {
        Alert.alert('Erreur', 'Un problème est survenu lors de la lecture');
      });
  };


  return (
    <View style={styles.container}>
      <Button title="Tester la fonction" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default TestScreen;
