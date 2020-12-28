import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import logoXRed from '../../assets/logo-x-red.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.Image.attrs({
  source: logoXRed,
  resizeMode: 'contain',
})`
  width: 100%;
  height: 15%;
  margin-top: 64px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 0 80px;
  text-align: center;
`;

export const Details = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  text-align: center;
`;

export const Actions = styled.View`
  height: 128px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const ActionContainer = styled(RectButton)`
  width: 156px;
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
