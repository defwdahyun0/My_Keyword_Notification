import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

const KeywordButton = ({ onPress, name }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#efefef"
    style={styles.button}
  >
    <Text style={[styles.text, name == "Delete" ? styles.deleteButton : null]}>
      {name}
    </Text>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    padding: 7,
    borderColor: "#efefef",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
    marginLeft: 10,
  },
  text: {
    color: "#666666",
  },
  deleteButton: {
    color: "rgba(175,47,47,1)",
  },
});
export default KeywordButton;
