import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';
export default ({title, onPress, Resendback, Resentxt}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{...style.backbtn, ...Resendback}}>
        <Text style={{...style.btntext, ...Resentxt}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  backbtn: {
    backgroundColor: color.DARK_RED,
    height: moderateVerticalScale(50),
    marginTop: moderateVerticalScale(15),
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btntext: {
    fontSize: moderateVerticalScale(16),
    fontWeight: '600',
    textAlign: 'center',
    color: color.White,
  },
});
