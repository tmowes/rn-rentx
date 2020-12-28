import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { welcome } from '../../constants';
import * as S from './styles';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();
  const { title, details, actions } = welcome;
  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <S.Logo />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Details>{details}</S.Details>
      </S.Content>
      <S.Actions>
        {actions.map(({ label, backgroundColor, action }, index) => (
          <S.ActionContainer key={label + index} style={{ backgroundColor }} onPress={() => navigate(action)}>
            <S.ActionLabel>{label}</S.ActionLabel>
          </S.ActionContainer>
        ))}
      </S.Actions>
    </S.Container>
  );
};

export default Welcome;
