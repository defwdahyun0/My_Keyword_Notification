import React from "react";
import { View, Text, StyleSheet } from "react-native";

let message_text1 =
  "2020학년도 2학기 아주대학교 동문장학생 선발\n1. 장학금명 : 아주대학교 동문장학\n2. 장학금액 : 1,000,000원 (인당, 생활비)\n3. 장학대상 : 인천에 연고가 있거나 있었던 자 / 총 5명\n4. 지원자격\n가. 2020학년도 2학기 현재 아주대학교 재학동문 (추후, 학적변동(휴학 또는 제적) 발생시 장학금 환수)\n나. 가계형편이 곤란한 재학동문으로서, 2020학년도 2학기 한국장학재단 소득분위 0~6분위자 우대";
let message_text2 =
  "국립국제교육원에서 2021 <대만장학금> 장학생 선발을 진행합니다. 관심있는 학생들의 많은 지원 바랍니다.\n가. 선발 과정 : 석·박사 학위과정\n나. 선발 정원 : 6명\n다. 지원 방법: 주한국타이페이대표부 교육조에 직접 지원(등기우편으로 송부)\n라. 서류 제출 마감: 2021. 3. 31.(수) 18:00까지 도착분\n마. 지원자격 및 제출서류 : [붙임] 선발 공고 참조\n바. 문의처: 02-6329-6058(대만장학금 담당자), korea@mail.moe.gov.tw\n※ 선발 및 장학금 관련 문의는 위의 주한국타이페이대표부 교육조 <대만장학금> 담당자에게 직접 문의할 것";
const DetailsScreen = () => {
  //let message_text = "참가";
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.message_text}> {message_text1}</Text>
      </View>
      <View style={styles.message}>
        <Text style={styles.message_text}> {message_text2}</Text>
      </View>
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    alignItems: "center",
    width: 300,
    height: 260,
    backgroundColor: "dodgerblue", //or grey or cornflowerblue
    marginLeft: 36,
    marginTop: 15,
    borderRadius: 10,
  },
  message_text: {
    fontSize: 15,
    color: "white",
    padding: 10,
  },
});
