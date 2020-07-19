import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import Choice from "../components/Choice";
const _CHOICES = [
  {
    name: "rock",
    require: require("../../assets/rock.png"),
  },
  {
    name: "paper",
    require: require("../../assets/paper.png"),
  },
  {
    name: "scissors",
    require: require("../../assets/scissors.png"),
  },
];

const randomComputerChoice = () =>
  _CHOICES[Math.floor(Math.random() * _CHOICES.length)];

const getRoundOutcome = (userChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;
  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }
  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};
const getColor = (result) => {
  if (result === "Victory!") return "green";
  if (result === "Defeat!") return "red";
  return null;
};

const PlayWithComputer = ({ navigation }) => {
  const [gamePrompt, setGamePrompt] = useState("");
  const [computerChoice, setComputerChoice] = useState({});
  const [userChoice, setUserChoice] = useState({});
  const [color, setColor] = useState("");
  const [history, setHistory] = useState([]);

  const handlePlay = (userChoice) => {
    const [result, compChoice] = getRoundOutcome(userChoice);
    const newUserChoice = _CHOICES.find((choice) => choice.name === userChoice);
    const newComputerChoice = _CHOICES.find(
      (choice) => choice.name === compChoice
    );
    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setHistory([
      ...history,
      {
        result,
        userChoice: newUserChoice.require,
        computerChoice: newComputerChoice.require,
      },
    ]);
    setColor(getColor(result));
  };
  return (
    <View style={styles.main}>
      <Text style={{ ...styles.title, color: color }}>{gamePrompt}</Text>
      <View style={styles.result}>
        <Choice
          imageSource={
            userChoice.require
              ? userChoice.require
              : require("../../assets/loading.gif")
          }
          player="You"
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text> ---</Text>
          <Text style={{ fontWeight: "bold" }}>VS</Text>
          <Text> ---</Text>
        </View>
        <Choice
          imageSource={
            computerChoice.require
              ? computerChoice.require
              : require("../../assets/loading.gif")
          }
          player="Computer"
        />
      </View>
      <View style={styles.action}>
        <Button
          _onPress={() => handlePlay("rock")}
          style={styles.button}
          styleText={{ fontSize: 18 }}
        >
          Rock
        </Button>
        <Button
          _onPress={() => handlePlay("paper")}
          style={styles.button}
          styleText={{ fontSize: 18 }}
        >
          Paper
        </Button>
        <Button
          _onPress={() => handlePlay("scissors")}
          style={styles.button}
          styleText={{ fontSize: 18 }}
        >
          Scissors
        </Button>
      </View>
      <Button
        _onPress={() => navigation.navigate("History", { history })}
        style={styles.menu}
      >
        HISTORY
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  action: { flex: 0.3, flexDirection: "row", marginTop: 150 },
  result: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.4,
  },
  button: {
    backgroundColor: "#FDD835",
    width: 70,
    height: 50,
    borderRadius: 999,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 0.2,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  menu: {
    flex: 0.1,
    backgroundColor: "#FDD835",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontWeight: "bold",
  },
});
export default PlayWithComputer;
