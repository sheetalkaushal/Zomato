import {View, Text} from 'react-native';
import React from 'react';
import { BottomTab} from './BottomTab';
import strings from '../constants/strings';
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={"BottomTab"}
        component={BottomTab}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={'Toptabs'}
        component={Toptabs}
        options={{headerShown: false}}
      />
   */}
    </>
  );
}
