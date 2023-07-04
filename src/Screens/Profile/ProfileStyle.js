import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light_white,
    marginHorizontal: moderateScale(10),
    marginBottom:moderateScale(23)
  },
  arrow: {
    marginTop: moderateScale(56),
    marginLeft: moderateScale(12),
  },
  profileview: {
    backgroundColor: color.White,
    borderRadius: 15,
    marginTop: moderateScale(23),
    elevation: 2,
    shadowColor: color.Black,
  },
  profilename: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
    padding: moderateScale(20),
  },
  profileimg: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: 180,
  },
  profiletxt: {
    padding: moderateScale(20),
    fontSize: 25,
    color: color.Black,
    fontWeight: '700',
  },
  ViewActivity: {
    padding: moderateScale(20),
    fontSize: 14,
    color: color.Red,
    fontWeight: '400',
  },
  profilepercent: {
    backgroundColor: color.Red,
    position: 'absolute',
    marginTop: moderateScale(80),
    marginLeft: moderateScale(20),
    width: moderateScale(45),
    height: moderateScale(25),
    borderRadius: 20,
    elevation: 6,
    color: color.White,
  },
  percenttxt: {
    color: color.White,
    alignSelf: 'center',
    fontSize: 12,
    marginTop: moderateScale(4),
  },
  profileviewOver: {
    borderRadius: 70,
    borderWidth: 8,
    borderColor: color.sliver,
    borderTopColor: color.Red,
    height: moderateScale(110),
  },
  arrowright: {
    width: moderateScale(10),
    height: moderateScale(10),
  },
  mainicons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: moderateScale(12),
  },
  allicon: {
    backgroundColor: color.White,
    height: moderateScale(110),
    width: '31%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  imgicon: {
    paddingTop: moderateScale(6),
    fontSize: 14,
    fontWeight: '500',
    color: color.Black,
  },
  updateView: {
    backgroundColor: color.White,
    marginTop: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    borderRadius: 15,
  },
  appimgview: {
    flexDirection: 'row',
    gap: 12,
  },
  update: {
    backgroundColor: color.LIGHT_GREY,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 20,
  },
  ratingarrow: {
    flexDirection: 'row',
    gap: 10,
  },
  updateimg: {
    width: moderateScale(20),
    height: moderateScale(20),
    alignSelf: 'center',
    marginTop: moderateScale(9),
    tintColor: color.grey,
  },
  updatetxt: {
    fontSize: 16,
    color: color.Black,
    fontWeight: '600',
    alignSelf: 'center',
    letterSpacing: 0.4,
  },
  arrownext: {
    alignSelf: 'center',
    tintColor: color.grey,
  },
  ratingborder: {
    backgroundColor: color.LIGHT_GREY,
    width: moderateScale(50),
    height: moderateScale(30),
    borderRadius: 10,
    alignSelf: 'center',
  },
  starborder: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginTop: moderateScale(4),
    alignSelf: 'center',
    tintColor: color.grey,
  },
  mainview: {
    backgroundColor: color.White,
    marginTop: moderateScale(12),
    borderRadius: 16,
    paddingBottom: moderateScale(20),
  },
  headingview: {
    borderLeftColor: color.Red,
    borderLeftWidth: 4,
    paddingLeft: moderateScale(12),
    marginTop: moderateScale(17),
  },
  headingtxt: {
    fontSize: 18,
    color: color.Black,
    fontWeight: '600',
  },
  settingview: {
    paddingHorizontal: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(12),
  },
  borderbottom: {
    borderBottomWidth: 1,
    borderBottomColor: color.sliver,
    marginLeft: moderateScale(65),
  },
});
