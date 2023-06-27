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
import strings from '../../constants/strings';
import Countrypicker from '../../Components/Countrypicker';
import CustomBtn from '../../Components/CustomBtn';
import Modal from 'react-native-modal';

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
    language: strings.English,
    img: imagePath.icCrown,
  },
  {
    id: 2,
    language: strings.hindi,
    img: imagePath.icCrown,
  },
  {
    id: 3,
    language: strings.tamil,
    img: imagePath.icCrown,
  },
  // {
  //   id: 4,
  //   language: strings.mrathi,
  //   img: 'https://www.shutterstock.com/image-vector/london-cityscape-flat-vector-illustration-260nw-1517957384.jpg',
  // },
  // {
  //   id: 5,
  //   language: strings.Nepali,
  //   img: 'https://www.shutterstock.com/image-vector/london-cityscape-flat-vector-illustration-260nw-1517957384.jpg',
  // },
  // {
  //   id: 6,
  //   language: strings.telgu,
  //   img: 'https://www.shutterstock.com/image-vector/london-cityscape-flat-vector-illustration-260nw-1517957384.jpg',
  // },
  // {
  //   id: 7,
  //   language: strings.Punjabi,
  //   img: 'https://www.shutterstock.com/image-vector/london-cityscape-flat-vector-illustration-260nw-1517957384.jpg',
  // },
];
const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [modalVisible, setVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [confrim, setConfrim] = useState(null);
  const [displayOTPInput, setDisplayOTPInput] = useState(false);
  async function GoToOrder() {
    if (!phoneNumber.trim()) {
      alert('Enter Phonenumber');
    } else {
      AsyncSendData('Suggestions', {phoneNumber: phoneNumber});
      navigation.navigate('OTPScreen');
    }
  }

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
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={style.cancel}>
                <Text>Select Language</Text>
                <Text>{strings.cancel}</Text>
              </TouchableOpacity>

              <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          borderWidth: 1,
                          borderColor: 'black',
                          height: 24,
                          marginHorizontal: 12,
                        }}>
                        <Text>{item.language}</Text>
                        <Image
                          style={{width: 20, height: 20}}
                          source={item.img}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </Modal>
            <TouchableOpacity style={style.skipNext}>
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
            GoToOrder(), getPhoneNumber(), {item};
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
  );
};
export default Login;
