import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  inputfileds: {
    marginBottom: 30,
    height: 50,
  },
  img: {
    height: moderateScale(250),
    width: moderateScale(360),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: moderateScale(23),
    borderRadius: 10,
  },
  imgview: {
    marginTop: 24,
  },
  arrowbackview: {
    flexDirection: 'row',
    gap: 5,
  },
  headingtitle: {
    marginTop: 60,
    marginHorizontal: 23,
  },
  signtxt: {
    color: color.Black,
    fontWeight: '500',
    fontSize: 23,
  },
  arrowimg: {
    alignSelf: 'center',
  },
  validationstyle: {
    color: color.Light_red,
    fontSize: 14,
    marginLeft: 3,
  },
  submitviews:{
    width:moderateScale(250),
  }
});
