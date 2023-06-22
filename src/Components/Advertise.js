import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';

const Advertise = ({
  Advertisement,
  Explore1,
  favitem1,
  exploretxt,
  Explore2,
  favitem2,
  favitem,
  Restaurant1,
  Restaurant2,
}) => {
  return (
    <View style={{...style.Advertise, ...favitem}}>
      <View
        style={{
          ...style.AdvertiseLeft,
          ...Explore1,
          ...favitem1,
          ...Restaurant1,
        }}></View>
      <Text style={{...style.Advertisementtxt, ...exploretxt}}>
        {Advertisement}
      </Text>
      <View
        style={{
          ...style.AdvertiseRight,
          ...Explore2,
          ...favitem2,
          ...Restaurant2,
        }}></View>
    </View>
  );
};

const style = StyleSheet.create({
  AdvertiseLeft: {
    height: moderateScale(2),
    width: '16%',
    marginLeft: moderateScale(10),
    backgroundColor: color.LIGHT_GREY,
  },
  AdvertiseRight: {
    height: moderateVerticalScale(2),
    width: '16%',
    marginRight: moderateScale(10),
    backgroundColor: color.LIGHT_GREY,
  },
  Advertisementtxt: {
    height: moderateVerticalScale(30),
    color: color.grey,
    fontSize: 15,
    fontWeight: '400',
    padding: moderateScale(4),
    letterSpacing: 2,
  },
  Advertise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
});
export default Advertise;
