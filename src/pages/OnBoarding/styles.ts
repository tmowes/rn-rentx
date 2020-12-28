import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const halfWidth = width / 2;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 128px 0 32px 0;
  background-color: whitesmoke;
`;

export const HorizontalScrollView = styled(Animated.ScrollView).attrs({
  horizontal: true,
  snapToInterval: width,
  decelerationRate: 'fast',
  showsHorizontalScrollIndicator: false,
  bounces: false,
  scrollEventThrottle: 16,
})``;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 32px;
`;

export const Next = styled(BorderlessButton)`
  width: ${width}px;
`;

export const RightIcon = styled(AntDesign)``;

export const FooterContent = styled(Animated.View)`
  flex-direction: row;
  margin: 0 ${halfWidth + 32}px;
`;
