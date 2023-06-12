import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import imagePath from '../../constants/imagePath';
import color from '../../style/color';
import {style} from './LoginStyle';
import strings from '../../constants/strings';

import Countrypicker from '../../Components/Countrypicker';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const phonNumberValidation = val => {
    if (val.match('^[0-9]*$')) {
      setPhoneNumber(val);
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
          }}
        />
      </View>
    </View>
  );
};
export default Login;
