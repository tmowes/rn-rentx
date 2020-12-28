import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { login } from '../../constants';

import * as S from './styles';

const CarList: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { title, details, actions } = login;

  return (
    <S.Container>
      <S.Next onPress={goBack}>
        <S.BackIcon name='left' color='#7a7a80' size={28} />
      </S.Next>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Details>{details}</S.Details>
      </S.Content>
      <S.FormContainer>
        <S.Input placeholder='E-mail' />
        <S.Input placeholder='Senha' />
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

export default CarList;
