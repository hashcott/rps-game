import React, { useState } from "react";
import ItemHistory from "../components/ItemHistory";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Button from "../components/Button";

const History = ({ navigation: { state } }) => {
  const renderItem = (item, i) => {
    return <ItemHistory data={item} count={i} />;
  };
  const len = state.params.history.length;
  const wins = state.params.history.filter(
    ({ result }) => result === "Victory!"
  );
  const losses = state.params.history.filter(
    ({ result }) => result === "Defeat!"
  );
  const tieGames = state.params.history.filter(
    ({ result }) => result === "Tie game!"
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ marginRight: 30, fontWeight: "bold" }}>Time</Text>
        <Text style={{ fontWeight: "bold" }}>Result </Text>
        <Text style={{ fontWeight: "bold" }}>User Choice</Text>
        <Text style={{ fontWeight: "bold" }}>Computer Choice</Text>
      </View>
      <ScrollView style={styles.main}>
        {state.params.history && state.params.history.map(renderItem)}
      </ScrollView>
      <View style={styles.statics}>
        <Button
          style={{ ...styles.btn, backgroundColor: "#007BFF" }}
          styleText={{ color: "#fff", textAlign: "center" }}
        >
          Total of Game : {len}
        </Button>
        <Button
          style={{ ...styles.btn, backgroundColor: "#28A745" }}
          styleText={{ color: "#fff", textAlign: "center" }}
        >
          Wins : {wins.length && Math.floor((wins.length * 100) / len)}%
        </Button>
        <Button
          style={{ ...styles.btn, backgroundColor: "#DC3545" }}
          styleText={{ color: "#fff", textAlign: "center" }}
        >
          Losses : {losses.length && Math.floor((losses.length * 100) / len)}%
        </Button>
        <Button
          style={{ ...styles.btn, backgroundColor: "#FFC107" }}
          styleText={{ color: "#fff", textAlign: "center" }}
        >
          Tie Games :{" "}
          {tieGames.length && Math.floor((tieGames.length * 100) / len)}%
        </Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  main: { flex: 0.6 },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statics: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  btn: {
    width: 80,
    height: 80,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default History;
