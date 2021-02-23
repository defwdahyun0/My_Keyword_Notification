import React, { useContext, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../utils/theme';

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: dodgerblue;
  align-self: flex-start;
  margin: 20px;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: flex-start;
`;
const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ffffff;
  padding: 15px 20px;
`;
const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ItemTitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const ItemDescription = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  color: #808080;
`;

const lists = [];
lists.push({
  id: 1,
  title: `공지사항`,
  description: `공지사항을 확인할 수 있습니다.`,
})
lists.push({
  id: 2,
  title: `계정관리`,
  description: `계정 관련 정보 변경, 이메일 수신동의 및 로그아웃`,
})
lists.push({
  id: 3,
  title: `앱 알림 설정`,
  description: `앱 알림을 설정하는 화면으로 이동합니다.`,
})
lists.push({
  id: 4,
  title: `앱 알림 주기 설정`,
  description: `앱 알림 주기를 설정합니다. 키워드 별로 설정할 수 있습니다.`,
})
lists.push({
  id: 5,
  title: `도움말`,
  description: `키워드 알림 앱 이용 도움말입니다.`,
})
lists.push({
  id: 6,
  title: `이용약관`,
  description: `앱 이용약관을 확인할 수 있습니다.`,
})
lists.push({
  id: 7,
  title: `개인정보 처리방침`,
  description: `개인정보 처리방침을 확인할 수 있습니다.`,
})
lists.push({
  id: 8,
  title: `문의 메일 보내기`,
  description: `앱 이용 중 문의사항을 문의메일로 보내주세요.`,
})

const Item = React.memo(
  ({ item: { id, title, description, createdAt }, onPress }) => {
    const theme = useContext(ThemeContext);
    console.log(`Item: ${id}`);

    return (
      <ItemContainer onPress={() => onPress({ id, title })}>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </ItemTextContainer>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
        />
      </ItemContainer>
    );
  }
);

const SettingScreen = ({ navigation }) => {

  const _handleItemPress = params => {
    navigation.navigate('AddScrean', params);
  };

  return (
    <Container>
      <Title>설정</Title>
      <FlatList
        keyExtractor={item => item['id']}
        data={lists}
        renderItem={({ item }) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
        windowSize={3}
      />
    </Container>
  );
};

export default SettingScreen;