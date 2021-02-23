import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const category = [
  {
    label: "아주대학교 포탈",
    value: "portal",
  },
  {
    label: "공과대학",
    value: "eng",
  },
  {
    label: "정보통신대학",
    value: "it",
  },
  {
    label: "자연과학대학",
    value: "ns",
  },
  {
    label: "경영대학",
    value: "biz",
  },
  {
    label: "인문대학",
    value: "human",
  },
  {
    label: "사회과학대학",
    value: "coss",
  },
  {
    label: "의과대학",
    value: "medicine",
  },
  {
    label: "간호대학",
    value: "nursing",
  },
  {
    label: "약학대학",
    value: "pharm",
  },
  {
    label: "다산학부대학",
    value: "uc",
  },
  {
    label: "국제학부",
    value: "isa",
  },
];

const MainCategory = ({ main_cateValue, main_cateChange }) => (
  <View>
    <View paddingVertical={5} />
    <RNPickerSelect
      placeholder={{
        label: "알림을 등록할 단과대를 고르세요.",
        value: null,
        color: "black",
      }}
      items={category}
      onValueChange={main_cateChange}
      style={pickerSelectStyles}
      value={main_cateValue}
    />
  </View>
);

const styles = StyleSheet.create({});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 4,
    color: "black",
    //paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "whitesmoke",
    width: 330,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    //paddingRight: 30,
  },
});
export default MainCategory;
