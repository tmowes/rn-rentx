import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const avatarSize = width / 2;
const avatarRadius = width / 4;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 32px 0;
  width: ${width}px;
  justify-content: space-between;
`;

export const EditButton = styled(BorderlessButton)``;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(AntDesign).attrs({
  size: 24,
  color: '#aeaeb3',
})``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 96px;
`;

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
  font-weight: 600;
`;

export const Details = styled.Text`
  color: #7a7a80;
  font-size: 18px;
`;
export const Number = styled.Text`
  color: whitesmoke;
  font-size: 18px;
`;

export const ProfileDetails = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: space-evenly;
  width: ${width}px;
  margin-left: -32px;
  margin-bottom: -1px;
  border-bottom-width: 1px;
  border-bottom-color: #dc1637;
  border-top-width: 1px;
  border-top-color: #dc1637;
`;

export const Avatar = styled.Image`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: ${avatarRadius}px;
  margin-top: -90px;
  border-width: 1px;
  border-color: #dc1637;
`;

export const Username = styled.Text`
  width: ${avatarSize}px;
  color: whitesmoke;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const Favorite = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #dc1637;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;
