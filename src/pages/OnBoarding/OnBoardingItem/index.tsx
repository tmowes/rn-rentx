import React from 'react'

import * as S from './styles'
import { OnBoardingItemProps } from './types'

const OnBoardingItem = ({ item }: OnBoardingItemProps) => {
  const { icon, number, title, details } = item
  return (
    <S.Container>
      <S.Header>
        <S.Icon name={icon} size={80} color="#DC1637" />
        <S.Number>{number}</S.Number>
      </S.Header>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Details>{details}</S.Details>
      </S.TextContainer>
    </S.Container>
  )
}

export default OnBoardingItem
