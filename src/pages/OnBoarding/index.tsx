import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { onboarding } from '../../constants';
import OnBoardingItem from './OnBoardingItem';
import * as C from '../../components';

const { width } = Dimensions.get('window');

import * as S from './styles';

const OnBoarding: React.FC = () => {
  const { navigate } = useNavigation();
  const scroll = useAnimatedRef<Animated.ScrollView>();
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const currentIndex = useDerivedValue(() => translateX.value / width);
  const animatedFooter = useAnimatedStyle(() => ({
    width: width * (onboarding.length + 1),
    transform: [{ translateX: -translateX.value }],
  }));

  return (
    <S.Container>
      <S.HorizontalScrollView ref={scroll} onScroll={onScroll}>
        {onboarding.map(item => (
          <OnBoardingItem key={item.number} item={item} />
        ))}
      </S.HorizontalScrollView>
      <S.Footer>
        {onboarding.map((_, index) => (
          <C.PaginationDot key={index} {...{ index, currentIndex }} />
        ))}
        <S.FooterContent style={animatedFooter}>
          {onboarding.map((_, index) => {
            const last = index === onboarding.length - 1;
            return (
              <S.Next
                key={index}
                onPress={() => {
                  if (last) {
                    navigate('Welcome');
                  } else {
                    scroll.current?.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}>
                <S.RightIcon name='right' color='#7a7a80' size={28} />
              </S.Next>
            );
          })}
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  );
};

export default OnBoarding;
