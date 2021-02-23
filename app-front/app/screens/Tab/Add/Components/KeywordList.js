import React from "react";
import { View, StyleSheet } from "react-native";
import Keyword from "./Keyword";

const KeywordList = ({ keywords, deleteKeyword }) => {
  keywords = keywords.map((keyword) => {
    return (
      <Keyword
        deleteKeyword={deleteKeyword}
        key={keyword.keywordIndex}
        keyword={keyword}
      />
    );
  });

  return <View style={styles.keyword}>{keywords}</View>;
};
export default KeywordList;

const styles = StyleSheet.create({
  keyword: {
    marginTop: 15,
    width: 370,
  },
});
