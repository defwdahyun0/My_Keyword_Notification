import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";

const AddScreen = () => {
  // TouchbleHighlight의 onPress에서 실행할 함수
  // buttonClick: {
  //   //state줘야함(in App.js), & null처리 & list에 추가시켜줘야함
  //   Alert.alert("키워드 추가 완료");
  // }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>키워드 추가 </Text>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.keword_in}>
          <TextInput
            placeholder="알림을 받아보고 싶은 키워드를 입력하세요."
            placeholderTextColor="dimgray"
            fontSize="16"
            textAlign="center"
          ></TextInput>
        </View>
        <View style={styles.uriIn}>
          <TextInput
            multiline={true}
            placeholder={
              "알림을 받아보고 키워드 알림을 \n등록할 웹사이트의 URI을 입력하세요."
            }
            placeholderTextColor="dimgray"
            fontSize="16"
            textAlign="center"
          ></TextInput>
        </View>
        <View style={styles.touch_container}>
          <TouchableHighlight
            onPress={() => Alert.alert("키워드 추가 완료")}
            underlayColor={"transparent"}
          >
            <View style={styles.button}>
              <Text style={styles.button_title}>완료</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    flex: 15, //이거 더 증가시키면 헤더 부분 작아짐
  },
  keword_in: {
    height: 50,
    width: 330,
    backgroundColor: "gainsboro",
    marginTop: 30,
    marginLeft: 19,
    paddingTop: 13,
    borderRadius: 6,
  },
  uriIn: {
    height: 80,
    width: 330,
    backgroundColor: "gainsboro",
    marginTop: 15,
    marginLeft: 19,
    paddingTop: 13,
    borderRadius: 6,
  },
  touch_container: {
    marginTop: 20,
    marginLeft: 19,
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
