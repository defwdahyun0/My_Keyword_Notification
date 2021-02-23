import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../utils/images';
import SettingInput from './SettingInput';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

/*
const keyword = ({ item , deleteKey }) => {
  return (
    <Container>
      <Contents>  {item.text}   </Contents>
      <IconButton type={images.update} />
      <IconButton type={images.delete} id={item.id} onPressOut={deleteKey} />
    </Container>
  );
};
*/

const keyword = ({ item, deleteKey, updateKey }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };
  const _onSubmitEditing = () => {
    if (isEditing) {
      const editedKey = Object.assign({}, item, { text });
      setIsEditing(false);
      updateKey(editedKey);
    }
  };
  const _onBlur = () => {
    if (isEditing) {
      setIsEditing(false);
      setText(item.text);
    }
  };

  return isEditing ? (
    <SettingInput
      value={text}
      onChangeText={text => setText(text)}
      onSubmitEditing={_onSubmitEditing}
      onBlur={_onBlur}
    />
  ) : (
    <Container>
      <Contents>  {item.text}   </Contents>
      <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>
      <IconButton type={images.delete} id={item.id} onPressOut={deleteKey} />
  </Container>
  );
};

keyword.propTypes = {
  text: PropTypes.string.isRequired,
  deleteKey: PropTypes.func.isRequired,
};

export default keyword;
