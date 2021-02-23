import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";

const Button = ({ submitKeyword }) => (
  <View style={styles.touch_container}>
    <TouchableHighlight style={styles.button} onPress={submitKeyword}>
      <View style={styles.button}>
        <Text style={styles.button_title}>완료</Text>
      </View>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  touch_container: {
    marginTop: 20,
    backgroundColor: "dodgerblue",
    height: 50,
    width: 330,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "dodgerblue",
    height: 50,
    width: 330,
    borderRadius: 6,
    justifyContent: "center",
  },
  button_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
export default Button;
