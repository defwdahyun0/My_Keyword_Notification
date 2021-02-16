import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
  background-color: #3679fe;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  marginTop: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; //버튼 클릭 가능 여부,button에서 props를 통해 전달되는 disabled 값에 따라 버튼 스타일 변경
`;
const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
`;

const Button = ({ containerStyle, title, onPress, isFilled }) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isFilled={isFilled}
      //disabled={disabled}
    >
      <Title isFilled={isFilled}>{title}</Title>
    </Container>
  );
};

Button.defaultProps = {
  isFilled: true,
};

Button.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isFilled: PropTypes.bool,
  disabled: PropTypes.bool, //버튼 동작 여부 시각화
};

export default Button;