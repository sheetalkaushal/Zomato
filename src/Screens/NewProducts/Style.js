import {Dimensions, StyleSheet} from 'react-native';
import color from '../../style/color';
const {width, height} = Dimensions.get('window');
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Grey,
    marginTop: moderateScale(34),
  },
  productdetail: {
    borderColor: color.Black,
    borderWidth: 1,
    marginHorizontal: moderateScale(12),
    borderRadius: 12,
    marginTop: moderateScale(34),
    padding: moderateScale(20),
    backgroundColor: color.White,
  },
  productbanner: {
    alignSelf: 'center',
  },
  formdetail: {
    marginTop: 10,
  },
  productbtn: {
    width: moderateScale(200),
  },
  inputfileds: {
    marginBottom: 30,
    height: 50,
  },
  productfrom: {
    color: color.Red,
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 20,
  },
  txtcontent: {
    paddingVertical: 2,
    fontSize: 20,
    color: color.Black,
    fontWeight: '600',
  },
  pickimg: {
    backgroundColor: color.LIGHT_GREY,
    width: moderateScale(50),
    height: moderateVerticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  picker: {
    flexDirection: 'row',
    marginTop: moderateScale(12),
    gap: 23,
  },
  validationfiled: {
    color: color.Red,
    fontSize: 17,
  },

});
