import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { signup } from '../../constants';

import * as C from '../../components';
import * as S from './styles';
import SignUpItem from './SignUpItem';

const { width } = Dimensions.get('window');

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();
  const scroll = useAnimatedRef<Animated.ScrollView>();
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const currentIndex = useDerivedValue(() => translateX.value / width);

  return (
    <S.Container>
      <S.Header>
        <S.Next onPress={goBack}>
          <S.BackIcon name='left' color='#7a7a80' size={28} />
        </S.Next>
        <S.DotContainer>
          {signup.map((_, index) => (
            <C.PaginationDot key={index} {...{ index, currentIndex }} />
          ))}
        </S.DotContainer>
      </S.Header>
      <S.HorizontalScrollView ref={scroll} onScroll={onScroll}>
        {signup.map((item, index) => (
          <SignUpItem key={index} item={item} />
        ))}
      </S.HorizontalScrollView>
    </S.Container>
  );
};

export default SignUp;
