import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import imagePath from '../../constants/imagePath';
import color from '../../style/color';
import {style} from './LoginStyle';
import auth from '@react-native-firebase/auth';
import strings from '../../constants/lang/index';
import Countrypicker from '../../Components/Countrypicker';
import CustomBtn from '../../Components/CustomBtn';
import Modal from 'react-native-modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import OTPScreen from '../OTPScreen/OTPScreen';
import {AsyncSendData} from '../utilis/utilis';
import ModalComp from '../../Components/ModalComp';

data = [
  {
    id: 1,
    roundimg: imagePath.icroundimg,
    language: strings.English,
    img: imagePath.icunitedkingdom,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 2,
    roundimg: imagePath.icroundimg,
    language: strings.hindi,
    img: imagePath.iclalkila,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 3,
    roundimg: imagePath.icroundimg,
    language: strings.Punjabi,
    img: imagePath.icpunjabi,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 4,
    roundimg: imagePath.icroundimg,
    language: strings.mrathi,
    img: imagePath.icmarathi,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 5,
    roundimg: imagePath.icroundimg,
    language: strings.Nepali,
    img: imagePath.icnepali,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 6,
    roundimg: imagePath.icroundimg,
    language: strings.telgu,
    img: imagePath.ictelgu,
    radiobtn: imagePath.icradiobtn,
  },
  {
    id: 7,
    roundimg: imagePath.icroundimg,
    language: strings.tamil,
    img: imagePath.ictamil,
    radiobtn: imagePath.icradiobtn,
  },
];
const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [modalVisible, setVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [confrim, setConfrim] = useState(null);
  const [displayOTPInput, setDisplayOTPInput] = useState(true);
  const [locState, SetLocState] = useState({data});
  onPressvalue = id => {
    const newloc = data.map(value => {
      if (value.id == id) {
        return {...value, roundimg: imagePath.icradiobtn};
      } else {
        return value;
      }
    });
    SetLocState({data: newloc});
  };
  // async function GoToOrder() {
  //   if (!phoneNumber.trim()) {
  //     alert('Enter Phonenumber');
  //   } else {
  //     AsyncSendData('Suggestions', {phoneNumber: phoneNumber});
  //     navigation.navigate('OTPScreen');
  //   }
  // }
  const toggleModal = () => {
    setVisible(!modalVisible);
  };
  function onAuthStateChanged(user) {
    console.log(user);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const phonNumberValidation = val => {
    if (val.match('^[0-9]*$')) {
      setPhoneNumber(val);
    }
  };
  // main otp action
  const requestOTP = async () => {
    setDisplayOTPInput(true);
    const confirmation = await auth().signInWithPhoneNumber(
      '+91' + phoneNumber,
    );
    console.log(confirmation, 'confirm');
    setConfrim(confirmation);
  };
  const getPhoneNumber = () => {
    if (phoneNumber == '') {
      alert('Enter a mobile number');
    } else {
      requestOTP();
      navigation.navigate(OTPScreen, {confrim});
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
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <StatusBar
          barStyle="default"
          hidden={false}
          backgroundColor={color.Red}
          translucent={true}
        />
        <View style={style.navbar}>
          <ImageBackground style={style.backimg} source={imagePath.iczomicon}>
            <View style={style.translateLang}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={style.translateSkip}>
                <Image style={style.Translate} source={imagePath.icTranslate} />
              </TouchableOpacity>

              <Modal
                style={style.translatemodal}
                isVisible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={style.cancel}>
                  <Text style={style.selectlang}>{strings.SelectLanguage}</Text>
                  <Text style={style.cancelbtn}>{strings.cancel}</Text>
                </TouchableOpacity>
                <FlatList
                  style={{marginTop: 30}}
                  scrollEnabled={true}
                  keyExtractor={item => item.id.toString()}
                  data={locState.data}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity onPress={() => onPressvalue(item.id)}>
                        <View style={style.languageview}>
                          <Image
                            style={style.roundbtn}
                            source={item.roundimg}
                          />
                          <Text style={style.language}>{item.language}</Text>
                          <Image style={style.countryimg} source={item.img} />
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Modal>
              <TouchableOpacity
                style={style.skipNext}
                onPress={() => {
               getPhoneNumber();
                }}>
                <Text style={style.Skip}>{strings.Skip}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
            onPress={item => {
              getPhoneNumber(), {item};
            }}
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
            <TouchableOpacity
              style={style.googlebtn}
              onPress={() => {
                toggleModal();
              }}>
              <Image style={style.googleimg} source={imagePath.icMOre} />
            </TouchableOpacity>
          </View>
          <View style={style.Agreeterms}>
            <Text style={style.AgreeServices}>{strings.agree_Our}</Text>
            <Text style={style.AgreeServices}> {strings.Services_privacy}</Text>
          </View>
        </View>

        <ModalComp
          visible={modalVisible}
          transparent={true}
          cross={imagePath.icclose}
          Fackbookicon={imagePath.icFacbook}
          Emailicon={imagePath.icEmail}
          Fackbooktxt={strings.facebook}
          Emailtxt={strings.Email}
          onRequestClose={() => {
            setVisible(!modalVisible);
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Login;
