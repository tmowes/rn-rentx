import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import * as P from '../pages';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Navigator
    sceneContainerStyle={{ backgroundColor: '#15161E' }}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#DC1637',
    }}>
    <Screen
      name='Home'
      component={P.Home}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name='home' size={24} color={color} />,
      }}
    />
    <Screen
      name='CarList'
      component={P.CarList}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name='car' size={24} color={color} />,
      }}
    />
    <Screen
      name='Appointments'
      component={P.Appointments}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name='calendar' size={24} color={color} />,
      }}
    />
    <Screen
      name='Profile'
      component={P.Profile}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name='user' size={24} color={color} />,
      }}
    />
  </Navigator>
);

export default TabRoutes;
