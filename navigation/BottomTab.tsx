import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screens} from '../helpers/Screens';
import {Map} from '../src/screens/Map';
import {Other} from '../src/screens/Other';
import {Home} from '../src/screens/Home';
import {IconTabHome} from '../assets/pictures/IconTabHome';
import {IconTabOther} from '../assets/pictures/IconTabOther';
import {IconTabMap} from '../assets/pictures/IconTabMap';

export const BottomTab = memo(() => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Screens.HomeScreen}
        component={Home}
        options={{
          tabBarIcon: ({color}) => <IconTabHome tintColor={color} />,
        }}
      />
      <Tab.Screen
        name={Screens.Map}
        component={Map}
        options={{
          tabBarIcon: ({color}) => <IconTabMap tintColor={color} />,
        }}
      />
      <Tab.Screen
        name={Screens.Other}
        component={Other}
        options={{
          tabBarIcon: ({color}) => <IconTabOther tintColor={color} />,
        }}
      />
    </Tab.Navigator>
  );
});
