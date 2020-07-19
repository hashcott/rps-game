import React, { useState } from "react";
import ItemHistory from "../components/ItemHistory";
import { StyleSheet, View, Image } from "react-native";

const Instruction = () => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.img}
        source={require("../../assets/game-rules.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: 360, height: 320 },
});
export default Instruction;
