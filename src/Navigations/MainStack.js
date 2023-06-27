import {View, Text} from 'react-native';
import React from 'react';
import {BottomTab} from './BottomTab';
import strings from '../constants/strings';
import Profile from '../Screens/Profile/Profile';
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'BottomTab'}
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
    </>
  );
}
