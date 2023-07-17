import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    backgroundColor: color.light_white,
    flex: 1,
    marginTop: moderateScale(34),
  },
  subtotalView: {
    borderRadius: 10,
    backgroundColor: color.White,
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(10),
    paddingVertical: moderateScale(12),
  },
  grandtotal: {
    color: color.DARK_RED,
    alignSelf: 'center',
    marginTop: moderateScale(29),
    fontSize: 30,
    fontWeight: '700',
  },
  subtotal: {
    fontSize: 25,
    fontWeight: '700',
    color: color.grey,
  },
  gstcharges: {
    flexDirection: 'row',
    paddingLeft: moderateScale(12),
    gap: 6,
    marginTop: moderateScale(3),
  },
  gstRent: {
    color: color.grey,
  },
  chargesimg: {
    tintColor: color.grey,
    width: moderateScale(20),
    height: moderateScale(20),
  },
  totalgrand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(12),
  },
  grandview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(8),
    borderTopColor: color.light_white,
    borderTopWidth: 1,
    marginTop: moderateScale(12),
  },
  grandcharge: {
    color: color.grey,
    fontWeight: '700',
    fontSize: 24,
  },
  totalitem: {
    flexDirection: 'row',
  justifyContent:"space-evenly"
  },
  subgrand:{
    marginLeft:moderateScale(200)
  }
});
