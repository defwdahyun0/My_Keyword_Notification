import React from "react";
import { View, Text, StyleSheet } from "react-native";
import KeywordButton from "./KeywordButton";

const Keyword = ({ keyword, deleteKeyword }) => (
  <View style={styles.todoContainer}>
    <View>
      <Text style={styles.todoText}>{keyword.title}</Text>
      <Text style={styles.cateText}>{keyword.cate}</Text>
    </View>
    <View style={styles.buttons}>
      <KeywordButton
        name="Delete"
        onPress={() => deleteKeyword(keyword.keywordIndex)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 17,
  },
  cateText: {
    paddingTop: 5,
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
});
export default Keyword;
