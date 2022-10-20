import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/Screens';
import {BottomTab} from './BottomTab';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
    </Stack.Navigator>
  );
};
