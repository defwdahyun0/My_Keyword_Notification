import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import KeywordInput from "./Components/KeywordInput";
import Button from "./Components/Button";
import KeywordList from "./Components/KeywordList";
import MainCategory from "./Components/MainCategory";
import SubCategory from "./Components/SubCategory";
//import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

let keywordIndex = 0;
let main_categoryIndex = 0;
let sub_categoryIndex = 0;

// url 직접입력할 때 사용
// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );

class AddScreen extends Component {
  constructor() {
    super();
    this.state = {
      keywordValue: "",
      keywords: [],
      main_cateValue: "",
      main_categories: [],
      sub_cateValue: "",
    };
    this.submitKeyword = this.submitKeyword.bind(this);
    this.deleteKeyword = this.deleteKeyword.bind(this);
  }
  keywordChange(keywordValue) {
    this.setState({ keywordValue });
  }
  main_cateChange(main_cateValue) {
    this.setState({ main_cateValue });
  }
  sub_cateChange(sub_cateValue) {
    this.setState({ sub_cateValue });
  }
  submitKeyword() {
    if (
      !this.state.keywordValue ||
      !this.state.main_cateValue ||
      !this.state.sub_cateValue
    ) {
      return Alert.alert("세부사항을 모두 입력해주세요");
    }
    const keyword = {
      title: this.state.keywordValue,
      cate: this.state.sub_cateValue, //this is point!!!
      keywordIndex,
    };
    const main_category = {
      title: this.state.main_cateValue,
      main_categoryIndex,
    };
    keywordIndex++;
    main_categoryIndex++;
    const keywords = [...this.state.keywords, keyword];
    const main_categories = [...this.state.main_categories, main_category];
    this.setState({ keywords, keywordValue: "" });
    this.setState({ main_categories, main_cateValue: "" }); //이것도 필요하면 배열로 만들기
    this.setState({ keywords, sub_cateValue: "" });
    Alert.alert("키워드 추가 완료");
  }

  deleteKeyword(keywordIndex) {
    let { keywords } = this.state;
    keywords = keywords.filter(
      (keyword) => keyword.keywordIndex !== keywordIndex
    );
    this.setState({ keywords });
  }

  render() {
    let { keywordValue, keywords, main_cateValue, sub_cateValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>키워드 추가 </Text>
        </View>

        <View style={styles.bottom_container}>
          <KeywordInput //키워드입력에 글자제한 줘야함
            keywordValue={keywordValue}
            keywordChange={(text) => this.keywordChange(text)}
          />
          <MainCategory
            main_cateValue={main_cateValue}
            main_cateChange={(value) => this.main_cateChange(value)}
          />
          <SubCategory
            main_cateValue={main_cateValue}
            sub_cateValue={sub_cateValue}
            sub_cateChange={(value) => this.sub_cateChange(value)}
          />
          <Button submitKeyword={this.submitKeyword} />
          <ScrollView>
            <KeywordList
              deleteKeyword={this.deleteKeyword}
              keywords={keywords}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //flexWrap: "wrap",
  },
  header: {
    flex: 1,
    borderBottomColor: "gainsboro", // 회색
    borderBottomWidth: 1.5,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
    color: "dodgerblue",
  },
  bottom_container: {
    flex: 13, //이거 더 증가시키면 헤더 부분 작아짐
    alignItems: "center",
  },
});
