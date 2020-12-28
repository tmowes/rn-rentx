import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  width: ${width}px;
  justify-content: space-between;
`;
export const Content = styled.View``;

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 40px;
  font-weight: bold;
  padding: 0 80px 0 0;
  margin-bottom: 8px;
`;

export const Details = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  padding: 0 160px 0 0;
  margin-bottom: 8px;
`;

export const FormContainer = styled.View`
  margin-top: 16px;
`;

export const SubTitle = styled.Text`
  color: whitesmoke;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
  height: 56px;
  border-radius: 4px;
  background: #f2f2fa;
  margin-bottom: 8px;
  padding: 0 20px;
`;

export const Actions = styled.View`
  height: 128px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ActionContainer = styled(RectButton)`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 4px;
  background-color: #dc1637;
`;

export const ActionLabel = styled.Text`
  color: #e1e1e6;
  font-size: 16px;
  text-align: center;
`;
