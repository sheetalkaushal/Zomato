import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import  {useEffect} from 'react';
import {StatusBar} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang/index';
import {style} from './OTPStyle';
import color from '../../style/color';
import CustomBtn from '../../Components/CustomBtn';
import {datasend} from '../../redux/actions/action';
import {AsyncSendData} from '../utilis/utilis';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const OTPScreen = ({navigation}) => {
  function OTPAlert() {
    if (!value.trim()) {
      AsyncSendData(navigation.navigate('Delivery'));
      alert('Enter OTP');
    } else if (value == '') {
      myOtpStatus = value;
    } else {
      myOtpStatus = false;
    }
  }
  var myOtpStatus;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({setValue, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={style.root}>
      <View style={style.banner}>
        <View style={style.OTPsection}>
          <StatusBar
            barStyle="default"
            hidden={false}
            backgroundColor={color.sliver}
            translucent={true}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={style.navbar}>
            <Image source={imagePath.icWest_Back} />
            <Text style={style.Otpverification}>{strings.OTPSCREEN}</Text>
          </TouchableOpacity>
          <View style={style.VerificationCode}>
            <Text style={style.Verification}>{strings.Verification}</Text>
          </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={style.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[style.cell, isFocused && style.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <CustomBtn
            onPress={() => {
              datasend(value), OTPAlert();
            }}
            Resendback={style.Resendsms}
            Resentxt={style.Resendtxt}
            title={strings.Resendsms}
          />
          <TouchableOpacity
            style={style.loginmethods}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={style.trylogin}>{strings.login_methods}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
