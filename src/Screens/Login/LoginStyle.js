import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  backimg: {
    width: 400,
    height: 300,
  },
  loginsection: {
    marginTop: moderateVerticalScale(20),
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
    marginVertical: moderateVerticalScale(23),
    padding: 4,
  },
  logsign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logline1: {
    height: 2,
    width: 100,
    marginLeft: moderateScale(44),
    backgroundColor: color.LIGHT_GREY,
  },
  logline2: {
    height: 2,
    width: 100,
    marginRight: moderateScale(44),
    backgroundColor: color.LIGHT_GREY,
  },
});
