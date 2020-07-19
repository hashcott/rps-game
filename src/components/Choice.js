import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Choice = ({ style, imageSource, player }) => {
  return (
    <View style={{ ...style, ...styles.choice }}>
      <Image style={styles.image} source={imageSource} />
      <Text>{player}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  choice: { justifyContent: "space-between", alignItems: "center" },
  image: {
    height: 80,
    width: 80,
  },
});
export default Choice;
