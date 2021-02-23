import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const eng = [
  {
    label: "기계공학과",
    value: "기계공학과",
  },
  {
    label: "환경안전공학과",
    value: "환경안전공학과",
  },
  {
    label: "산업공학과",
    value: "산업공학과",
  },
  {
    label: "건설시스템공학과",
    value: "건설시스템공학과",
  },
  {
    label: "화학공학과",
    value: "화학공학과",
  },
  {
    label: "교통시스템공학과",
    value: "교통시스템공학과",
  },
  {
    label: "신소재공학과",
    value: "신소재공학과",
  },
  {
    label: "건축학과 (건축학/건축공학전공)",
    value: "건축학과 (건축학/건축공학전공)",
  },
  {
    label: "응용화학생명공학과",
    value: "응용화학생명공학과",
  },
  {
    label: "융합시스템공학과",
    value: "융합시스템공학과",
  },
];

const it = [
  {
    label: "전자공학과",
    value: "전자공학과",
  },
  {
    label: "미디어학과",
    value: "미디어학과",
  },
  {
    label: "소프트웨어학과",
    value: "소프트웨어학과",
  },
  {
    label: "국방디지털융합학과",
    value: "국방디지털융합학과",
  },
  {
    label: "사이버보안학과",
    value: "사이버보안학과",
  },
  {
    label: "인공지능융합학과",
    value: "인공지능융합학과",
  },
];
const ns = [
  {
    label: "수학과",
    value: "수학과",
  },
  {
    label: "화학과",
    value: "화학과",
  },
  {
    label: "물리학과",
    value: "물리학과",
  },
  {
    label: "생명과학과",
    value: "생명과학과",
  },
];

const biz = [
  {
    label: "경영학과",
    value: "경영학과",
  },
  {
    label: "금융공학과",
    value: "금융공학과",
  },
  {
    label: "e-비즈니스학과",
    value: "e-비즈니스학과",
  },
  {
    label: "글로벌경영학과",
    value: "글로벌경영학과",
  },
];
const human = [
  {
    label: "국어국문학과",
    value: "국어국문학과",
  },
  {
    label: "사학과",
    value: "사학과",
  },
  {
    label: "영어영문학과",
    value: "영어영문학과",
  },
  {
    label: "문화콘텐츠학과",
    value: "문화콘텐츠학과",
  },
  {
    label: "불어불문학과",
    value: "불어불문학과",
  },
];
const coss = [
  {
    label: "경제학과",
    value: "경제학과",
  },
  {
    label: "사회학과",
    value: "사회학과",
  },
  {
    label: "행정학과",
    value: "행정학과",
  },
  {
    label: "정치외교학과",
    value: "정치외교학과",
  },
  {
    label: "심리학과",
    value: "심리학과",
  },
  {
    label: "스포츠레저학과",
    value: "스포츠레저학과",
  },
];
const medicine = [
  {
    label: "의학과",
    value: "의학과",
  },
];
const nursing = [
  {
    label: "간호학과",
    value: "간호학과",
  },
];
const pharm = [
  {
    label: "약학과",
    value: "약학과",
  },
];
const uc = [
  {
    label: "다산학부대학",
    value: "다산학부대학",
  },
];
const isa = [
  {
    label: "국제학부",
    value: "국제학부",
  },
];
const nul = [
  {
    label: "포탈 공지사항",
    value: "포탈 공지사항",
  },
];
const SubCategory = ({ main_cateValue, sub_cateValue, sub_cateChange }) => (
  <View>
    <View paddingVertical={5} />
    <RNPickerSelect
      placeholder={{
        label: "학과를 고르세요.",
        value: null,
        color: "black",
      }}
      items={
        main_cateValue === "portal"
          ? nul
          : main_cateValue === "eng"
          ? eng
          : main_cateValue === "it"
          ? it
          : main_cateValue === "ns"
          ? ns
          : main_cateValue === "biz"
          ? biz
          : main_cateValue === "human"
          ? human
          : main_cateValue === "coss"
          ? coss
          : main_cateValue === "medicine"
          ? medicine
          : main_cateValue === "nursing"
          ? nursing
          : main_cateValue === "pharm"
          ? pharm
          : main_cateValue === "uc"
          ? uc
          : isa
      }
      onValueChange={sub_cateChange}
      style={pickerSelectStyles}
      value={sub_cateValue}
    />
  </View>
);

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
export default SubCategory;
