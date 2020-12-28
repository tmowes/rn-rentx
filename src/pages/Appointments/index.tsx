import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { carslist, list } from '../../constants';

import * as C from '../../components';

import * as S from './styles';

const Appointments: React.FC = () => {
  const { header, placeholder } = list;
  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <S.Content>
        <S.Title>Agendamentos</S.Title>
        <S.Details>3 carros</S.Details>
      </S.Content>
      <ScrollView showsVerticalScrollIndicator={false}>
        {carslist.map((car, index) => (
          <C.CarsCarItem key={index} car={car} />
        ))}
      </ScrollView>
    </S.Container>
  );
};

export default Appointments;
