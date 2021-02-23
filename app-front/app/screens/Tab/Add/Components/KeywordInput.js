import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
const KeywordInput = ({ keywordValue, keywordChange }) => (
  <View style={styles.keword_in}>
    <TextInput
      value={keywordValue}
      fontSize="16"
      textAlign="center"
      placeholder="알림을 받아보고 싶은 키워드를 입력하세요."
      placeholderTextColor="dimgray"
      onChangeText={keywordChange}
    />
  </View>
);
const styles = StyleSheet.create({
  keword_in: {
    height: 50,
    width: 330,
    backgroundColor: "whitesmoke",
    marginTop: 30,
    paddingTop: 13,
    borderRadius: 6,
  },
});
export default KeywordInput;
