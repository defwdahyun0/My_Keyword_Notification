import * as React from "react";
import { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      pw: null,
    };
  }
  buttonClick() {
    fetch('http://13.125.132.137:3000/login', {
      method: "POST",
      headers: {
        'CONTENT-TYPE': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        psword: this.state.pw}),
      })
    .then(response=>{
      console.log(response);
      return response.json();
    }).then(data=>{
      console.log(data.success);


      if (data.success === true){
        AsyncStorage.setItem('authInfo', JSON.stringify(data.result))
        
        // DB에 존재하는 회원데이터와 일치할 시 로그인 성공
        this.props.navigation.navigate("TabStackScreen");
      }
      else{
        console.log("로그인 실패");
        Alert.alert("아이디 또는 비밀번호를 \n확인해주세요.");

      }
    })
  
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Keyword</Text>

        <View style={styles.iconContainer}>
          <Text style={styles.title}>Alarm</Text>
          <MaterialCommunityIcons name="bell-ring" size={50} color="gold" />
        </View>

        <View style={styles.id}>
          <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)을 setstate로 id값에 넣어줬음
            onChangeText={(id) => this.setState({ id })}
            style={styles.idPw}
            placeholder="아이디"
            placeholderTextColor="black"
            borderColor="dodgerblue"
          />
        </View>
        <View style={styles.pw}>
          <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)을 setstate로 pw값에 넣어줬음
            onChangeText={(pw) => this.setState({ pw })}
            style={styles.idPw}
            placeholder="비밀번호"
            placeholderTextColor="black"
            secureTextEntry
            borderColor="dodgerblue"
          />
        </View>
        <View style={{ marginTop: 20, borderRadius: 8 }}>
          <TouchableHighlight
            onPress={() => this.buttonClick()}
            underlayColor={"transparent"}
          >
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>log in</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.etcTitle}>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("IDScreen")}
          >
            아이디찾기{" "}
          </Text>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("PWScreen")}
          >
            {" "}
            | {"  "}비밀번호찾기{"  "}
          </Text>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            | {"  "}회원가입
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    padding: 8,
  },
  title: {
    fontSize: 55,
    fontWeight: "900", //android에도 적용할려면 bold로 바꿔야 함
    textAlign: "center",
    color: "gold",
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 90,
  },
  id: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 8,
  },
  pw: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 8,
  },
  idPw: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "midnightblue",
    textAlign: "center",
  },
  etcTitle: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
  etc: {
    color: "midnightblue", //navy or midnightblue
    fontSize: 15,
  },
});
