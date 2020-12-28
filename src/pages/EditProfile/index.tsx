import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { editprofile } from '../../constants';

import * as C from '../../components';

import * as S from './styles';

const EditProfile: React.FC = () => {
  const { title, iconBack, username, uri, iconCamera } = editprofile;
  const { navigate, goBack } = useNavigation();
  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <S.Content>
        <S.EditButton onPress={() => goBack()}>
          <S.Icon name={iconBack} />
        </S.EditButton>
        <S.Title>{title}</S.Title>
        <S.LogoutButton onPress={() => true} />
      </S.Content>
      <S.ProfileDetails>
        <S.Avatar source={{ uri }} />
        <S.UpdateAvatarButton onPress={() => true}>
          <S.Icon name={iconCamera} />
        </S.UpdateAvatarButton>
        <S.TabRow>
          <S.Details>Dados</S.Details>
          <S.Details>Senha</S.Details>
        </S.TabRow>
        {/* <S.Username>{username}</S.Username> */}
      </S.ProfileDetails>
      <S.Favorite></S.Favorite>
    </S.Container>
  );
};

export default EditProfile;
