import {View, Text} from 'react-native';
import React from 'react';
import {BottomTab} from './BottomTab';
import strings from '../constants/strings';
import Profile from '../Screens/Profile/Profile';
import CartScreen from '../Screens/CartScreen/CartScreen';
import AmountAdd from '../Screens/AmountAdd/AmountAdd';
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
      <Stack.Screen
        name={'CartScreen'}
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={"AmountAdd"}
        component={AmountAdd}
        options={{headerShown: false}}
      />
    </>
  );
}
