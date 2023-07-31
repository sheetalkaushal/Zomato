import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from './Signupstyle';
import {useState} from 'react';
import TextInputfiled from '../../Components/TextInputfiled';
import imagePath from '../../constants/imagePath';
import color from '../../style/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomBtn from '../../Components/CustomBtn';
import Delivery from '../Delivery/Delivery';
import strings from '../../constants/lang';
import {datasend, userdata} from '../../redux/actions/action';
import {AsyncSendData} from '../utilis/utilis';
const Signup = ({navigation}) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [passcheck, Setpasscheck] = useState(true);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const user = {Email: Email};
  const handleFocus = stateChange => {
    stateChange(true);
  };
  const handleBlur = stateChange => {
    stateChange(false);
  };
  function gotoSignup() {
    if (!Email==="") {
      alert('enter Email');
    } else if (!Password==="") {
      alert('enter password');
    } else {
      userdata(user);
      AsyncSendData('Suggestions', {
        Email: Email,
      });
      datasend(true);
    }
  }
  function toggleEye() {
    Setpasscheck(!passcheck);
  }
  return (
    <View style={style.container}>
      <KeyboardAwareScrollView>
        <View style={style.headingtitle}>
          <TouchableOpacity
            style={style.arrowbackview}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image style={style.arrowimg} source={imagePath.icarrowback} />
            <Text style={style.signtxt}>{strings.SignUp}</Text>
          </TouchableOpacity>
          <View style={style.imgview}>
            <Image style={style.img} source={imagePath.ichomedelivery} />
          </View>
          <View style={{marginTop: 40}}>
            <View style={style.inputfileds}>
              <TextInputfiled
                placeholder="Email"
                value={Email}
                Focus={() => handleFocus(setIsFocusedEmail)}
                Blur={() => handleBlur(setIsFocusedEmail)}
                onChangeText={val => setEmail(val)}
               
                isFocused={isFocusedEmail}
                autoFocus={true}
              />
            </View>
            <View style={style.inputfileds}>
              <TextInputfiled
                placeholder="Password"
                value={Password}
                Focus={() => handleFocus(setIsFocusedPassword)}
                Blur={() => handleBlur(setIsFocusedPassword)}
                onChangeText={val => setPassword(val)}
                maxLength={15}
                passwordInput={true}
                passcheck={passcheck}
                toggleEye={toggleEye}
                isFocused={isFocusedPassword}
              />
            </View>
            <CustomBtn
              submitview={style.submitviews}
              onPress={() => {
                gotoSignup();
              }}
              title="Submit"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signup;
