import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { SignUpItemProps } from './types';

const SignUpItem = ({ item }: SignUpItemProps) => {
  const { title, details, subtitle, input1, input2, actions } = item;
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Details>{details}</S.Details>
      </S.Content>
      <S.FormContainer>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.Input placeholder={input1} />
        <S.Input placeholder={input2} />
      </S.FormContainer>
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

export default SignUpItem;
