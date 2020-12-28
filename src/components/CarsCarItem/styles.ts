import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 128px;
  background: #f4f5f640;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Content = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 0;
`;
export const Left = styled.View``;

const TextStyle = css`
  font-size: 12px;
  color: #aeaeb3;
  text-transform: uppercase;
`;

export const Brand = styled.Text`
  ${TextStyle}
`;

export const Model = styled.Text`
  font-size: 16px;
  color: whitesmoke;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  ${TextStyle}
`;

export const Price = styled.Text`
  color: #dc1637;
  font-size: 18px;
`;

export const BottomRow = styled.View`
  flex-direction: row;
`;

export const Right = styled.View``;

export const CarImage = styled.Image``;

export const BottomLine = styled.View`
  height: 8px;
  background: #dc1637;
`;
