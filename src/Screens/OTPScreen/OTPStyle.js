import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: color.White,
  },
  navbar: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(45),
    gap: 12,
  },
  Otpverification: {
    fontSize: 18,
    color: color.Black,
  },
  VerificationCode: {
    alignItems: 'center',
    marginTop: moderateVerticalScale(56),
  },
  Verification: {
    fontSize: 15,
  },
  Resendsms: {
    width: '42%',
    fontSize: 2,
    backgroundColor: color.LIGHT_GREY,
    borderWidth: 1,
    borderColor: color.sliver,
    marginTop: moderateScale(46),
  },
  Resendtxt: {
    fontSize: 15,
    color: color.sliver,
  },
  loginmethods: {
    alignSelf: 'center',
    marginTop: moderateScale(30),
  },
  trylogin: {
    color: color.Light_red,
    fontSize: 14,
    fontWeight: '600',
  },
  root: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: moderateScale(40),
  },
  cell: {
    width: moderateScale(40),
    height: moderateVerticalScale(40),
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 1,
    borderColor: color.grey,
    textAlign: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: color.Black,
  },
  OTPsection: {
    marginHorizontal: moderateScale(20),
  },
});
