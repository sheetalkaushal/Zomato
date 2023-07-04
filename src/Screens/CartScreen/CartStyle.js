import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';

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
    borderColor: color.Red,
    borderColor: color.Red,
    flexDirection: 'row',
    marginLeft: moderateScale(16),
    gap: 20,
    backgroundColor: color.LightRed,
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: moderateScale(12),
    paddingLeft: moderateScale(12),
    paddingRight: moderateScale(12),
    borderColor: color.green,
    marginLeft: moderateScale(50),
    borderColor: color.Red,
    borderWidth: 1,
  },
  datacount: {
    flexDirection: 'row',
    marginVertical: moderateScale(18),
  },
  decrement: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(18),
    width: moderateScale(18),
  },
  decrmentcontent: {
    fontWeight: '700',
  },
  contentincrement: {
    fontWeight: '700',
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
    marginLeft: 'auto',
    marginRight: moderateScale(8),
  },
  removedata: {
    color: color.Red,
  },
  add: {
    backgroundColor: color.Red,
    width: moderateScale(40),
    alignItems: 'center',
    borderRadius: 7,
    padding: moderateScale(3),
    color: color.White,
  },
  flatitems:{
    borderColor:color.Red,borderWidth:1,marginHorizontal:moderateScale(12),borderRadius:12,padding:50,marginTop:34}
});
