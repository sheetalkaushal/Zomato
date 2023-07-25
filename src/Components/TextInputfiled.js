import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import color from '../style/color';
import imagePath from '../constants/imagePath';
const TextInputfiled = ({
  value = '',
  onChangeText = () => {},
  Focus = () => {},
  Blur = () => {},
  placeholder = '',
  isFocused = false,
  onPress,
  maxLength,
  passcheck,
  autoFocus,
  img,
  keyword,
  multilines,
  numberOfLiness
}) => {
  const labelStyle = {
    position: 'relative',
    left: !isFocused ? 0 : 15,
    top: !isFocused ? 0 : 8,
    color: !isFocused ? color.Black : color.Red,
    paddingHorizontal: isFocused ? 6 : 0,
    backgroundColor: color.White,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    zIndex: 9999,
  };

  return (
    <View style={style.container}>
      <Text style={labelStyle}>{isFocused ? placeholder : ''}</Text>
      <TouchableOpacity style={style.textField}>
        <TextInput
          style={{
            ...style.inputtext,
            borderColor: !isFocused ? color.Grey : color.Red,
          }}
          value={value}
          onChangeText={onChangeText}
          onFocus={Focus}
          onBlur={Blur}
          autoFocus={autoFocus}
          blurOnSubmit
          placeholder={isFocused ? '' : placeholder}
          secureTextEntry={passcheck}
         keyboardType={keyword}
          multiline={multilines}
          numberOfLines={numberOfLiness}
          maxLength={maxLength}></TextInput>
        <TouchableOpacity>
          <Image source={img} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  inputtext: {
    fontSize: 16,
    color: 'black',
    height: moderateScale(50),
    marginBottom: moderateScale(10),
    paddingLeft: moderateScale(13),
    backgroundColor: color.White,
    borderRadius: moderateScale(5),
    borderWidth: 2,
    position: 'relative',
    width: moderateScale(300),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hidebtn: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default TextInputfiled;
