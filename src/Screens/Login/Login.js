import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import imagePath from '../../constants/imagePath';
import color from '../../style/color';
import {style} from './LoginStyle';
import strings from '../../constants/strings';

import Countrypicker from '../../Components/Countrypicker';
import CustomBtn from '../../Components/CustomBtn';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import OTPScreen from '../OTPScreen/OTPScreen';
import Modal from '../../Components/Modal';
const Login = props => {
  const {navigation} = props;
  console.log(navigation, 'navigation ==>');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const phonNumberValidation = val => {
    if (val.match('^[0-9]*$')) {
      setPhoneNumber(val);
    }
  };
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const Googlelogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={color.Red}
        translucent={true}
      />
      <View style={style.navbar}>
        <ImageBackground
          style={style.backimg}
          source={imagePath.iczomicon}></ImageBackground>
      </View>
      <View style={style.loginsection}>
        <View>
          <Text style={style.delivery}>{strings.Food_Delivery}</Text>
          <Text style={style.delivery}>{strings.Dining_App}</Text>
        </View>
        <View style={style.logsign}>
          <View style={style.logline1}></View>
          <Text style={style.log}>{strings.Log_Sign}</Text>
          <View style={style.logline2}></View>
        </View>
        <Countrypicker
          value={phoneNumber}
          onchangeText={phonNumberValidation}
          showInput={true}
          countryFlag={countryFlag}
          countryCode={countryCode}
          maxLength={10}
          placeholder={strings.Phone_Number}
          onSelect={country => {
            setCountryCode(country.cca2);
            setCountryFlag(country.callingCode[0]);
          }}
        />
        <CustomBtn
          onPress={() => navigation.navigate('OTPScreen')}
          title={strings.continue}
        />
        <View style={{...style.logsign, marginTop: 13}}>
          <View
            style={{...style.logline1, width: '40%', marginLeft: 20}}></View>
          <Text style={style.log}>{strings.or}</Text>
          <View
            style={{...style.logline2, width: '40%', marginRight: 20}}></View>
        </View>
        <View style={style.google}>
          <TouchableOpacity onPress={Googlelogin} style={style.googlebtn}>
            <Image style={style.googleimg} source={imagePath.icGoogle} />
          </TouchableOpacity>
          <TouchableOpacity  style={style.googlebtn}>
            <Image style={style.googleimg} source={imagePath.icMOre} />
            <Modal/>
          </TouchableOpacity>
        </View>
        <View style={style.Agreeterms}>
          <Text style={style.AgreeServices}>{strings.agree_Our}</Text>
          <Text style={style.AgreeServices}> {strings.Services_privacy}</Text>
        </View>
      </View>
    </View>
  );
};
export default Login;
