import React, {useState} from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '../../utils/theme';
import SettingInput from '../../components/SettingInput'
import IconButton from '../../components/IconButton';
import { images } from '../../utils/images';
import Key from '../../components/keyword'


const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.SafeAreaView`
  flex: 1;
  backgroundColor: "white";
  borderBottomColor: ${({ theme }) => theme.background};
  borderBottomWidth: 1.5;
`;
const HeaderTitle = styled.SafeAreaView`
  fontSize: 20;
  fontWeight: "bold";
  textAlign: "center";
  paddingTop: 8;
  color: "dodgerblue";
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 20px;
`;

const Explanation = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
  margin: 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  const [newKey, setNewKey] = useState('');
  const [Keys, setKeys] = useState({
    '1': {id: '1', text: '장학'},
    '2': {id: '2', text: '대회'},
    '3': {id: '3', text: '대외활동'},
    '4': {id: '4', text: '코딩'},
    '5': {id: '5', text: '아주대'},
  });

  const _addKey = () => {
    const ID = Date.now().toString();
    const newKeyObject = {
      [ID]: {id: ID, text: newKey}
    };
    setNewKey('');
    setKeys({ ...Keys, ...newKeyObject })
  };
  const _handleTextChange = text => {
    setNewKey(text);
  };

  const _deleteKey = id => {
    const currentKeys = Object.assign({}, Keys);
    delete currentKeys[id];
    setKeys(currentKeys);
  }

  const _updateKey = item => {
    const currentKeys = Object.assign({}, Keys);
    currentKeys[item.id] = item;
    setKeys(currentKeys);
  }

  const _onBlur = () => {
    setNewKey('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>키워드 관리</Title>
        <Explanation> 알림을 받고 싶은 키워드를 설정합니다. 키워드는 최대 5개까지 설정 가능합니다. </Explanation>
        <SettingInput 
          placeholder="키워드를 입력하세요" 
          value={newKey}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addKey}
          onBlur={_onBlur}
        />
        <List width={width}>
          {Object.values(Keys)
          .reverse()
          .map(item => (
            <Key 
              key={item.id} 
              item={item} 
              deleteKey={_deleteKey}
              updateKey={_updateKey}
            />
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}

/*
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
*/