import styled from 'styled-components/native';
// import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const EmojiText = styled.Text`
  font-size: 60px;
`;

export const CountryInfoContainer = styled.View`
  padding-left: 8px;
  flex: 1;
`;

export const CountryName = styled.Text`
  font-size: 16px;
  color: #333333;
  font-weight: bold;
`;

export const CountryCapitalText = styled.Text`
  font-size: 14px;
  color: #999;
`;
