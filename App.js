import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = "Tim A";
  const teamB = "Tim B";

  const addScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const subtractScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const addScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const subtractScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = () => {
    if (scoreA >= 10) {
      Alert.alert(`${teamA} Menang!`);
      resetScores();
    } else if (scoreB >= 10) {
      Alert.alert(`${teamB} Menang!`);
      resetScores();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {teamA} vs {teamB}
      </Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{scoreA}</Text>
        <Text style={styles.score}>{scoreB}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <View style={styles.buttonGroup}>
            <Button
              title="+"
              onPress={() => {
                addScoreA();
                checkWinner();
              }}
            />
            <Button title="-" onPress={subtractScoreA} />
          </View>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <View style={styles.buttonGroup}>
            <Button
              title="+"
              onPress={() => {
                addScoreB();
                checkWinner();
              }}
            />
            <Button title="-" onPress={subtractScoreB} />
          </View>
        </View>
      </View>
      <Button title="Reset" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0FFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  teamContainer: {
    alignItems: "center",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
});

export default App;
