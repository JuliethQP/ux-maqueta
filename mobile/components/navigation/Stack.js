import React from 'react';
import { StackNavigator } from '@react-navigation/native';
import CrearAlarma from '../CrearAlarma';
import Menu from '../Menu';

const Stack = StackNavigator({
  Home: {
    screen: () => <Menu/>,
  },
  CrearAlarma: {
    screen: () => <CrearAlarma />,
  },
});

export default Stack;