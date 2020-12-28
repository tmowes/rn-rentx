import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 32px 0;
  width: ${width}px;
  justify-content: space-between;
`;

export const Next = styled(BorderlessButton)``;

export const BackIcon = styled(AntDesign)``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Details = styled.Text`
  color: #7a7a80;
  font-size: 16px;
`;

export const FormContainer = styled.View`
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
  height: 56px;
  border-radius: 4px;
  background: #ebebf0;
  padding: 0 20px;
`;

export const CarsList = styled.View`
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
