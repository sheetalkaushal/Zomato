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
    padding: 4,
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
    width: 60,
    height: 60,
  },
  googleimg: {
    width: 25,
    height: 25,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(17),
  },
  // orline1:{
  // },
  // orline2:{
  // }
});
