import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {moderateScale} from 'react-native-size-matters';
import color from '../style/color';
function Countrypicker({
  value,
  onchangeText = () => {},
  countryFlag = '',
  CountryCode = 'IN',
  onSelect,
  showInput = false,
  withCountryName = false,
  withCurrencyButton = false,
  placeholder = '',
  maxLength,
}) {
  return (
    <View style={style.maindiv}>
      <View style={style.countryview}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryFlag={countryFlag}
          countryCode={CountryCode}
          withCallingCode={true}
          withEmoji={true}
          withFilter={true}
          withCurrencyButton={withCurrencyButton}
          withCountryName={withCountryName}></CountryPicker>
      </View>
      {showInput && (
        <View style={style.countrynumber}>
          <TextInput
            style={style.textinputstyle}
            onChangeText={onchangeText}
            keyboardType="phone-pad"
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={color.sliver}></TextInput>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  maindiv: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:moderateScale(6),
  },
  countryview: {
    justifyContent: 'center',
    borderColor: color.sliver,
    borderWidth: 1,
    borderRadius: 10,
    width: moderateScale(65),
    alignItems: 'center',
  },
  textinputstyle: {
    borderColor: color.sliver,
    borderWidth: 1,
    width: moderateScale(250),
    borderRadius: 10,
    paddingLeft: moderateScale(28),
  },
  countrynumber: {
    marginLeft: moderateScale(16),
    justifyContent: 'center',
  },
});

export default Countrypicker;
