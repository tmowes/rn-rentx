import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { profile } from '../../constants';

import * as C from '../../components';

import * as S from './styles';

const Profile: React.FC = () => {
  const {
    title,
    details,
    iconEdit,
    iconLogout,
    username,
    uri,
    favoriteCar,
    usageTimes,
    appointmentsCount,
    favoriteCarLabel,
  } = profile;
  const { navigate } = useNavigation();
  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <S.Content>
        <S.EditButton onPress={() => navigate('EditProfile')}>
          <S.Icon name={iconEdit} />
        </S.EditButton>
        <S.Title>{title}</S.Title>
        <S.LogoutButton onPress={() => navigate('Login')}>
          <S.Icon name={iconLogout} />
        </S.LogoutButton>
      </S.Content>
      <S.ProfileDetails>
        <S.Avatar source={{ uri }} />
        <S.Username>{username}</S.Username>
      </S.ProfileDetails>
      <S.Favorite>
        <S.Row>
          <S.Details>{details}</S.Details>
          <S.Number>{appointmentsCount}</S.Number>
        </S.Row>
        <S.Separator />
        <S.Row>
          <S.Details>{favoriteCarLabel}</S.Details>
          <S.Number>{usageTimes}</S.Number>
        </S.Row>
        <C.CarsCarItem car={favoriteCar} />
      </S.Favorite>
    </S.Container>
  );
};

export default Profile;
