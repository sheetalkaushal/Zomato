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
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import open from 'react-native-open-maps';
const HeaderComp = ({
  location,
  Toptitle,
  BottomTitle,
  arrowmore,
  ChangeLang,
  Profile,
  diningheader,
  locationChange,
  contenttitle,
  downcontentarrow,
  locationtitle,
  profileimg,
  addcart,
  cartvalue,
  onpress = () => {},
}) => {
  const carddata = useSelector(state => state.status.carddata);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={{...style.navbarheader, ...diningheader}}>
        {/* leftside */}

        <TouchableOpacity
          style={style.headerleft}
          onPress={() =>
            open({latitude: 30.71923776993991, longitude: 76.81066575861746})
          }>
          <Image
            style={{...style.location, ...locationChange}}
            source={location}
          />

          <TouchableOpacity style={style.bannercontent}>
            <TouchableOpacity style={style.Toptxt}>
              <Text style={{...style.Toptitle, ...contenttitle}}>
                {Toptitle}
              </Text>
              <Image
                style={{...style.arrowmore, ...downcontentarrow}}
                source={arrowmore}
              />
            </TouchableOpacity>
            <Text style={{...style.BottomTitle, ...locationtitle}}>
              {BottomTitle}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {/* leftside */}
        <TouchableOpacity style={style.headerRight}>
          {!!addcart && (
            <TouchableOpacity
              style={style.addcartitem}
              onPress={() => navigation.navigate('CartScreen')}>
              <Image
                onPress={carddata.length}
                style={style.addcart}
                source={addcart}
              />
              <View style={style.bages}>
                <Text style={style.cartvalue}>{cartvalue}</Text>
              </View>
            </TouchableOpacity>
          )}
          {!!ChangeLang && (
            <TouchableOpacity style={style.translatelang}>
              <Image style={style.ChangeLang} source={ChangeLang} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={{...style.profile, ...profileimg}} source={Profile} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp;
const style = StyleSheet.create({
  navbarheader: {
    top: 0,
    left: 0,
    right: 0,
    marginTop: moderateScale(32),
    backgroundColor: color.White,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: moderateScale(50),
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
    height: moderateScale(25),
    width: moderateScale(25),
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
    width: 240,
  },
  Toptxt: {
    flexDirection: 'row',
  },
  arrowmore: {
    height: moderateScale(20),
    width: moderateScale(20),
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
    width: moderateScale(35),
    height: moderateScale(35),
    justifyContent: 'center',
    borderColor: color.LIGHT_GREY,
    borderRadius: 9,
    elevation: 3,
  },
  ChangeLang: {
    width: moderateScale(18),
    height: moderateScale(18),
    alignSelf: 'center',
    tintColor: color.Black,
  },
  profile: {
    width: moderateScale(55),
    height: moderateScale(55),
  },
  addcart: {
    width: moderateScale(20),
    height: moderateScale(20),
    alignSelf: 'center',
    marginTop: moderateScale(4),
  },
  addcartitem: {
    borderWidth: 1,
    width: moderateScale(35),
    height: moderateScale(35),
    borderColor: color.LIGHT_GREY,
    borderRadius: 9,
    marginRight: moderateScale(3),
  },
  bages: {
    backgroundColor: color.Red,
    borderRadius: 19,
    width: moderateScale(17),
    height: moderateScale(17),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -4,
    right: 0,
  },
  cartvalue: {
    color: color.White,
    fontSize: 13,
    fontWeight: '500',
  },
});
