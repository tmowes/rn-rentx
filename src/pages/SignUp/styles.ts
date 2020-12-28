import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 0;
  width: ${width}px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const Next = styled(BorderlessButton)``;

export const BackIcon = styled(AntDesign)``;

export const DotContainer = styled.View`
  flex-direction: row;
`;

export const HorizontalScrollView = styled(Animated.ScrollView).attrs({
  horizontal: true,
  snapToInterval: width,
  decelerationRate: 'fast',
  showsHorizontalScrollIndicator: false,
  bounces: false,
  scrollEventThrottle: 16,
})``;
