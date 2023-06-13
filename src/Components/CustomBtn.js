import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';
export default ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style.backbtn}>
        <Text style={style.btntext}>{title}</Text>
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
    paddingVertical: moderateVerticalScale(14),
    borderRadius: 8,
  },
  btntext: {
    fontSize: moderateVerticalScale(16),
    fontWeight: '600',
    textAlign: 'center',
    color: color.White,
  },
});
