import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import * as P from '../pages';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}>
      <Screen name='TabRoutes' component={TabRoutes} />
      <Screen name='OnBoarding' component={P.OnBoarding} />
      <Screen name='Welcome' component={P.Welcome} />
      <Screen name='Login' component={P.Login} />
      <Screen name='SignUp' component={P.SignUp} />
      {/* <Screen name="ForgotPassword" component={P.ForgotPassword} /> */}
      <Screen name='EditProfile' component={P.EditProfile} />
    </Navigator>
  </>
);

export default AppRoutes;
