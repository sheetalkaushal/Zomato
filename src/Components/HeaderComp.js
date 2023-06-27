import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import { useNavigation } from '@react-navigation/native';

const HeaderComp = ({
  location,
  Toptitle,
  BottomTitle,
  arrowmore,
  ChangeLang,
  Profile,
  sreachbar,
  mic,
  onChangeText,
  placeholder,
  placeholderTextColor,
  value,
  sreachbartxt,
  onpress = ()=>{},
}) => {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <View style={style.navbarheader}>
        {/* leftside */}
        <TouchableOpacity style={style.headerleft}>
          <Image style={style.location} source={location} />
          <TouchableOpacity style={style.bannercontent}>
            <TouchableOpacity style={style.Toptxt}>
              <Text style={style.Toptitle}>{Toptitle}</Text>
              <Image style={style.arrowmore} source={arrowmore} />
            </TouchableOpacity>
            <Text style={style.BottomTitle}>{BottomTitle}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {/* leftside */}
        <TouchableOpacity style={style.headerRight}>
          <TouchableOpacity style={style.translatelang}>
            <Image style={style.ChangeLang} source={ChangeLang} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Image style={style.profile} source={Profile} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp;
const style = StyleSheet.create({
  navbarheader: {
    marginTop: moderateScale(40),
    backgroundColor: color.White,
    // height: '15%',
    // width: '100%',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    tintColor: color.Red,
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: moderateScale(9),
  },
  Toptitle: {
    color: color.Black,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: moderateScale(4),
  },
  bannercontent: {
    width: '70%',
  },
  Toptxt: {
    flexDirection: 'row',
  },
  arrowmore: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: color.Black,
  },
  BottomTitle: {
    fontSize: 13,
    color: color.grey,
    marginLeft: moderateScale(4),
    fontWeight: '500',
  },
  translatelang: {
    backgroundColor: color.White,
    borderWidth: 1,
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderColor: color.LIGHT_GREY,
    borderRadius: 9,
    elevation: 3,
  },
  ChangeLang: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    tintColor: color.Black,
  },
  profile: {
    width: 55,
    height: 55,
  },
  // sreachbar: {
  //   borderWidth: 1,
  //   borderColor: color.sliver,
  //   height: 47,
  //   width: '95%',
  //   alignSelf: 'center',
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingLeft: moderateScale(10),
  //   paddingRight: moderateScale(10),
  //   justifyContent: 'space-evenly',
  //   marginTop: moderateScale(20),
  // },
  // sreach: {
  //   height: 20,
  //   width: 20,
  //   tintColor: color.Red,
  // },
  // mic: {
  //   height: 20,
  //   width: 20,
  //   tintColor: color.Red,
  // },
  // sreachbartxt: {
  //   width: '80%',
  //   marginLeft: moderateScale(5),
  //   color: color.grey,
  //   fontSize: 17,
  //   fontWeight: '400',
  // },
});
