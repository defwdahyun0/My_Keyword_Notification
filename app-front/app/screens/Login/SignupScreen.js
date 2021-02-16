import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import { Input, Button } from '../../components';
import { Alert, Text, View, TouchableHighlight } from "react-native";
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../../utils/common';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #ff0000;
`;

const SignupScreen= ({ navigation }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const didMountRef = useRef(); //useEffect 오류 메시지 처음 화면에서 나타나는 오류 해결, 마운트 되었을 때 useEffect에서 didMountRef에 값 대입하기

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = '';
      if (!id) {
        _errorMessage = 'Please enter your ID.';
      } else if (!validateEmail(email)) {
        _errorMessage = 'Please verify your email.';
      } else if (password.length < 6) {
        _errorMessage = 'The password must contain 6 characters at least.';
      } else if (password !== passwordConfirm) {
        _errorMessage = 'Passwords need to match.';
      } else {
        _errorMessage = '';
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [id, email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(id && email && password && passwordConfirm && !errorMessage)
    );
  }, [id, email, password, passwordConfirm, errorMessage]);

  const _handleSignupButtonPress = () => {
    fetch('http://13.125.132.137:3000/register', {
      method: "POST",
      headers: {
        'CONTENT-TYPE': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        email: email,
        psword: password,
        }),
      })
    .then(response=>{
      return response.json();
    }).then(data=>{
      if (data.success === true){
        Alert.alert("정상적으로 회원가입 되었습니다.");
        () => navigation.navigate("LoginScreen");
      }
      else{
        Alert.alert("입력한 정보를 확인해주세요.");
      }
    })
  };

  return (
    <Container>
        <Input
          label="ID"
          value={id}
          onChangeText={text => setId(text)}
          onSubmitEditing={() => {
            setId(id.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setId(id.trim())}
          placeholder="ID"
          returnKeyType="next"
        />
        <Input
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={text => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={text => setPassword(removeWhitespace(text))}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={_handleSignupButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Signup"
          onPress={_handleSignupButtonPress}
          disabled={disabled}
        />
          <Button
            title = "login"
            onPress={() => navigation.navigate("LoginScreen")}
            underlayColor={"transparent"}
         />

      </Container>
  );
};

export default SignupScreen;
