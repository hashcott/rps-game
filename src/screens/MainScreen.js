import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Image source={require("../../assets/main.png")} />
      <Button style={styles.button} _onPress={() => navigation.navigate("PWC")}>
        PLAY WITH COMPUTER
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("Instruction")}>
        <Text style={styles.sub}>See the instruction ?</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FDD835",
    paddingHorizontal: 70,
    paddingVertical: 23,
    fontSize: 35,
    borderRadius: 999,
  },
  sub: {
    fontSize: 20,
    fontWeight: "100",
    textAlign: "center",
  },
});
export default MainScreen;
