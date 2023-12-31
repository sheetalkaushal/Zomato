import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  backimg: {
    width: moderateScale(400),
    height: moderateVerticalScale(300),
  },
  loginsection: {
    marginTop: moderateVerticalScale(15),
  },
  delivery: {
    fontSize: 25,
    fontWeight: '700',
    color: color.DARK_Black,
    alignSelf: 'center',
  },
  log: {
    height: moderateVerticalScale(32),
    color: color.grey,
    fontSize: 14,
    fontWeight: '500',
    padding: moderateScale(4),
  },
  logsign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(24),
  },
  logline1: {
    height: moderateVerticalScale(2),
    width: '28%',
    marginLeft: moderateScale(30),
    backgroundColor: color.LIGHT_GREY,
  },
  logline2: {
    height: moderateVerticalScale(2),
    width: '28%',
    marginRight: moderateScale(30),
    backgroundColor: color.LIGHT_GREY,
  },
  AgreeServices: {
    color: color.grey,
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '500',
  },
  Agreeterms: {
    marginTop: moderateScale(16),
  },
  signagree: {
    flexDirection: 'row',
    marginLeft: moderateScale(80),
    gap: 2,
  },
  google: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    gap: 23,
    marginTop: moderateVerticalScale(13),
  },
  googlebtn: {
    borderColor: color.LIGHT_GREY,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: color.White,
    width: moderateScale(60),
    height: moderateScale(60),
  },
  googleimg: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(17),
  },
  translateSkip: {
    backgroundColor: color.Blue,
    width: moderateScale(50),
    height: moderateScale(30),
    opacity: 0.7,
    borderRadius: 13,
    justifyContent: 'center',
  },
  Translate: {
    width: moderateScale(20),
    height: moderateScale(20),
    alignSelf: 'center',
    justifyContent: 'center',
    tintColor: color.White,
  },
  translateLang: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(45),
    marginTop: moderateScale(56),
  },
  Skip: {
    color: color.White,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  languageview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.light_white,
    borderColor: 'black',
    height: moderateScale(35),
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(12),
    borderRadius: moderateScale(12),
  },

  countryimg: {
    width: moderateScale(30),
    height: moderateScale(25),
    marginRight: moderateScale(20),
    alignSelf: 'center',
  },
  language: {
    color: color.Black,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  roundbtn: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: color.Red,
    marginLeft: moderateScale(20),
    alignSelf: 'center',
  },
  skipNext: {
    backgroundColor: color.grey,
    width: moderateScale(50),
    height: moderateScale(30),
    opacity: 0.9,
    borderRadius: 13,
    justifyContent: 'center',
  },
  translatemodal: {
    backgroundColor: color.White,
    height: moderateScale(200),
    margin: moderateScale(0),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: moderateScale(290),
  },
  cancel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectlang: {
    color: color.Black,
    fontSize: 20,
    marginTop: moderateScale(12),
  },
  cancelbtn: {
    color: color.Red,
    marginTop: moderateScale(17),
    fontSize: 17,
    fontWeight: '700',
  },
});
