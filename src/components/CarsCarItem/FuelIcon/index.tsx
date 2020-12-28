import React from 'react';
import { Feather } from '@expo/vector-icons';

import { SimpleLineIcons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import { FuelIconProps } from './types';

const FuelIcon = ({ fuelType }: FuelIconProps) => {
  return (
    <S.Container>
      {fuelType === 'gas' && <Feather name='droplet' size={24} color='#aeaeb3' />}
      {fuelType === 'electric' && <SimpleLineIcons name='energy' size={24} color='#aeaeb3' />}
      {fuelType === 'etanol' && <Entypo name='leaf' size={24} color='#aeaeb3' />}
    </S.Container>
  );
};

export default FuelIcon;
