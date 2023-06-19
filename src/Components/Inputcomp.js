import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import color from '../style/color';

const Inputcomp = ({
  placeholder,
  keyboard,
  onPress,
  maxlength,
  onChangeText,
  value,
  isFocused,
}) => {
  return (
    <View
      style={{
        ...style.container,
        borderColor: !isFocused ? color.dark_Grey : color.Black,
      }}>
      <TextInput
        style={style.inputtxt}
        onChangeText={onChangeText}
        value={value}
        onFocus={isFocused}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        keyboardType={keyboard}
        maxLength={maxlength}></TextInput>
    </View>
  );
};

export default Inputcomp;
const style = StyleSheet.create({
  container: {
    borderColor: color.dark_Grey,
    borderWidth: 1,
    borderRadius: moderateScale(8),
    width: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputtxt: {
    marginLeft: moderateScale(11),
  },
});
