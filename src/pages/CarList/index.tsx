import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { carslist, list } from '../../constants';

import * as C from '../../components';

import * as S from './styles';

const Login: React.FC = () => {
  const { header, placeholder } = list;
  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <S.Content>
        <S.Title>{header}</S.Title>
        <S.Details>12 carros</S.Details>
      </S.Content>
      <S.FormContainer>
        <S.Input placeholder={placeholder} />
      </S.FormContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {carslist.map((car, index) => (
          <C.CarsCarItem key={index} car={car} />
        ))}
      </ScrollView>
    </S.Container>
  );
};

export default Login;
