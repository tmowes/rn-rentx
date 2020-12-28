import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  padding: 0 32px;
  width: ${width}px;
`

export const Icon = styled(AntDesign)``

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 64px;
`

export const TextContainer = styled.View`
  padding-right: 128px;
`

export const Number = styled.Text`
  color: #7a7a8040;
  font-size: 64px;
  font-weight: bold;
`
export const Title = styled.Text`
  color: #47474d;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Details = styled.Text`
  color: #7a7a80;
  font-size: 16px;
`
