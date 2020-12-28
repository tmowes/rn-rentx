import React from 'react';
import FuelIcon from './FuelIcon';

import * as S from './styles';
import { CarsCarItemProps } from './type';

const CarsCarItem = ({ car }: CarsCarItemProps) => {
  const { brand, model, labelPrice, price, fuelType, source } = car;
  return (
    <S.Container>
      <S.Content>
        <S.Left>
          <S.Brand>{brand}</S.Brand>
          <S.Model>{model}</S.Model>
          <S.Label>{labelPrice}</S.Label>
          <S.BottomRow>
            <S.Price>{price}</S.Price>
            <FuelIcon fuelType={fuelType} />
          </S.BottomRow>
        </S.Left>
        <S.Right>
          <S.CarImage source={source} />
        </S.Right>
      </S.Content>
      <S.BottomLine />
    </S.Container>
  );
};

export default CarsCarItem;
