import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ style, children, _onPress, styleText }) => {
  return (
    <TouchableOpacity onPress={_onPress} style={{ ...style, ...styles.button }}>
      <Text style={{ ...styleText }}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {},
});
export default Button;
