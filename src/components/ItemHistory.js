import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ItemHistory = ({ data, count }) => {
  return (
    <View style={styles.item}>
      <Text>{count + 1} </Text>
      <Text>{data.result} </Text>
      <Image style={styles.img} source={data.userChoice} />
      <Image style={styles.img} source={data.computerChoice} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
  },
});
export default ItemHistory;
