import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {style} from './OTPStyle';
import color from '../../style/color';
import CustomBtn from '../../Components/CustomBtn';
import Inputcomp from '../../Components/Inputcomp';
import {datasend} from '../../redux/actions/action';

const OTPScreen = ({navigation, route}) => {
  const [Inputfiled, setInputfiled] = useState('');
  function OTPAlert() {
    if (!Inputfiled.trim()) {
      alert('Enter OTP');
    }
  }
  return (
    <View style={style.banner}>
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
      <View style={style.mainOtpbox}>
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
        <Inputcomp
          placeholder=""
          maxlength={1}
          keyboard="phone-pad"
          value={Inputfiled}
        />
      </View>
      <CustomBtn
        onPress={() => {
          datasend(true), OTPAlert();
        }}
        Resendback={style.Resendsms}
        Resentxt={style.Resendtxt}
        title={strings.Resendsms}
      />
      <View style={style.loginmethods}>
        <Text style={style.trylogin}>{strings.login_methods}</Text>
      </View>
    </View>
  );
};

export default OTPScreen;
