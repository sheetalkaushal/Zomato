import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  cartview: {
    marginTop: moderateScale(45),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(18),
  },
  CartScreen: {
    color: color.Black,
    fontSize: 24,
    fontWeight: '600',
  },
  crosimg: {
    width: 40,
    height: 34,
    resizeMode: 'contain',
  },

  itemaddtview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(18),
  },
  ItemADD: {
    alignSelf: 'center',
    color: color.Black,
    fontSize: 18,
  },
  Bottomview: {
    flex: 0,
    backgroundColor: color.light_white,
    padding: 5,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderTopColor: color.sliver,
  },

  itemview: {
    flexDirection: 'row',
    gap: 3,
  },
  nextview: {
    borderRadius: 6,
    borderWidth: 1,
    width: 90,
    padding: 9,
    backgroundColor: color.Red,
    borderColor: color.White,
  },
  next: {
    alignSelf: 'center',
    fontSize: 18,
    color: color.White,
  },
  imgarrow: {
    tintColor: color.Red,
    alignItems: 'center',
    marginTop: 12,
  },
  quantity: {
    marginLeft: moderateScale(16),
  },
  itemquant: {
    fontSize: 12,
    fontWeight: '500',
    color: color.greybob,
  },
  selectdata: {
    marginTop: moderateScale(10),
    borderColor: color.Red,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: color.LightRed,
    alignItems: 'center',
    borderRadius: 7,
    padding: moderateScale(3),
    width: 100,
    borderWidth: 1,
  },
  // datacount: {justifyContent:"flex-end"},
  decrement: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(18),
    width: moderateScale(18),
  },
  decrmentcontent: {
    fontWeight: '700',
    fontSize: 20,
    color: color.Black,
  },
  contentincrement: {
    fontWeight: '700',
    fontSize: 20,
    color: color.Black,
  },
  increment: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    height: moderateScale(18),
    width: moderateScale(18),
  },
  incrementtxt: {
    fontSize: 20,
    color: color.Black,
  },
  remove: {
    marginLeft: moderateScale(33),
    marginTop: moderateScale(12),
    height: moderateScale(23),
    borderColor: color.White,
    borderWidth: 1,
    width: moderateScale(60),
    borderRadius: 5,
    backgroundColor: color.Red,
  },
  removedata: {
    color: color.White,
    fontSize: 12,
    fontWeight: '600',
  },
  add: {
    backgroundColor: color.Red,
    width: moderateScale(40),
    alignItems: 'center',
    borderRadius: 7,
    padding: moderateScale(3),
    color: color.White,
  },
  flatitems: {
    borderColor: color.Red,
    borderWidth: 1,
    marginHorizontal: moderateScale(12),
    borderRadius: 12,
    marginTop: moderateScale(34),
    padding: moderateScale(20),
  },
  backimg: {
    width: moderateScale(140),
    height: moderateVerticalScale(204),
    opacity: 0.8,
    backgroundColor: color.White,
  },
  offprice: {
    color: color.White,
    marginLeft: moderateScale(12),
    marginTop: moderateScale(150),
    fontSize: 17,
    fontWeight: 'bold',
  },
  priceset: {
    color: color.White,
    marginLeft: moderateScale(12),
    fontSize: 16,
    fontWeight: '700',
  },
  orderitem: {
    backgroundColor: color.White,
    flexDirection: 'row',
    marginLeft: moderateScale(0),
    borderRadius: 10,
    height: moderateScale(210),
    width: moderateScale(305),
    borderWidth: 1,
    borderColor: color.LIGHT_GREY,
    margin: moderateScale(10),
  },
  itemname: {
    padding: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  laPinoz: {
    color: color.Black,
    fontSize: 15,
    fontWeight: '700',
  },
  pizzatxt: {
    marginTop: moderateScale(3),
    color: color.sliver,
    fontWeight: '400',
    fontSize: 13,
  },
  money: {
    paddingTop: moderateScale(7),
  },
  countime: {
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'center',
    marginTop: moderateScale(6),
    paddingRight: moderateScale(44),
  },
  timewatch: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  starview: {
    flexDirection: 'row',
    gap: 7,
    marginTop: moderateScale(3),
  },
  rating: {
    height: moderateScale(20),
    tintColor: color.gold,
    borderColor: color.sliver,
    borderWidth: 1,
    width: moderateScale(70),
    borderRadius: 5,
    backgroundColor: color.light_gold,
  },
  removeitem: {
    alignSelf: 'center',
  },
});
