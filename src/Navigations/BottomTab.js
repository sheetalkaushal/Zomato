import * as React from 'react';
import {Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Delivery from '../Screens/Delivery/Delivery';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Dining from '../Screens/Dining/Dining';
import Money from '../Screens/Money/Money';
import color from '../style/color';
import strings from '../constants/lang/index';
import NewProducts from '../Screens/NewProducts/NewProducts';

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      initRouteName={strings.Delivery}
      screenOptions={{
        tabBarStyle: {
          height: moderateVerticalScale(60),
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 7,
          fontWeight: '500',
        },
        tabBarActiveTintColor: color.Black,
        tabBarInactiveTintColor: color.dark_Grey,
      }}>
      <Tab.Screen
        name={strings.Delivery}
        component={Delivery}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? color.Red : color.dark_Grey,
                }}
                source={imagePath.icDelivery}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={strings.Dining}
        component={Dining}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused ? color.Red : color.dark_Grey,
                }}
                source={imagePath.icdinner}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={strings.Money}
        component={Money}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? color.Red : color.dark_Grey,
                }}
                source={imagePath.icwallet}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={strings.NewProducts}
        component={NewProducts}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? color.Red : color.dark_Grey,
                }}
                source={imagePath.icproducts}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
