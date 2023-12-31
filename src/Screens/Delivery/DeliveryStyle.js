import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  sreachbar: {
    borderWidth: 1,
    borderColor: color.sliver,
    height: moderateVerticalScale(47),
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    justifyContent: 'space-evenly',
    marginTop: moderateScale(10),
  },
  sreach: {
    height: moderateVerticalScale(20),
    width: moderateScale(20),
    tintColor: color.Red,
  },
  mic: {
    height: moderateVerticalScale(20),
    width: moderateScale(20),
    tintColor: color.Red,
  },
  sreachbartxt: {
    width: '80%',
    marginLeft: moderateScale(5),
    color: color.grey,
    fontSize: 17,
    fontWeight: '400',
  },
  explore1: {
    width: '35%',
  },
  explore2: {
    width: '35%',
  },
  favitem: {
    marginTop: moderateScale(10),
  },
  favitem1: {
    width: '20%',
  },
  favitem2: {
    width: '20%',
  },
  backimg: {
    width: moderateScale(100),
    height: moderateVerticalScale(140),
    opacity: 0.8,
    backgroundColor: color.White,
  },
  gifimg: {
    width: moderateScale(360),
    height: moderateVerticalScale(190),
    marginTop: moderateScale(20),
    marginLeft: moderateScale(6),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.Red,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemname: {
    padding: moderateScale(10),
  },
  orderitem: {
    backgroundColor: color.White,
    flexDirection: 'row',
    marginLeft: moderateScale(9),
    borderRadius: 10,
    height: moderateScale(140),
    borderWidth: 1,
    borderColor: color.LIGHT_GREY,
  },
  offprice: {
    color: color.White,
    marginLeft: moderateScale(12),
    marginTop: moderateScale(90),
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceset: {
    color: color.White,
    marginLeft: moderateScale(12),
    fontSize: 13,
    fontWeight: '700',
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
    paddingTop: 7,
  },
  countime: {
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'center',
    paddingTop: moderateScale(8),
  },
  timewatch: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  Explore: {
    height: moderateVerticalScale(30),
    color: color.grey,
    fontSize: 15,
    fontWeight: '400',
    padding: moderateScale(4),
    letterSpacing: 3,
  },
  exploreoffer: {
    backgroundColor: color.White,
    padding: moderateScale(15),
    marginLeft: moderateScale(9),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.LIGHT_GREY,
    marginTop: moderateScale(15),
    elevation: 1,
    width: width / 2.5,
  },
  exploreitem: {
    width: moderateScale(70),
    height: moderateScale(80),
    alignSelf: 'center',
  },
  txtexplore1: {
    color: color.Black,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  productscontent: {
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtexplore2: {
    color: color.sliver,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  fooditemselect: {
    marginTop: moderateScale(30),
  },
  foodimg: {
    width: moderateScale(150),
    height: moderateScale(100),
    marginLeft: moderateScale(15),
    borderRadius: 30,
  },
  txttitle: {
    alignSelf: 'center',
    fontWeight: '600',
    marginTop: moderateScale(20),
    fontSize: 16,
    color: color.Black,
  },
  Restaurant1: {
    width: '25%',
  },
  Restaurant2: {
    width: '25%',
  },
  flatitemView: {
    borderWidth: 1,
    padding: moderateScale(10),
    flexDirection: 'row',
    borderColor: color.sliver,
    height: moderateVerticalScale(40),
    borderRadius: 10,
    backgroundColor: color.White,
    gap: 3,
  },
  listView: {
    flexDirection: 'row',
    marginLeft: moderateScale(5),
    marginTop: moderateScale(15),
  },
  flatitemtxt: {
    fontSize: 14,
    color: color.Black,
    fontWeight: '500',
  },
  fliterdownimg: {
    tintColor: color.Black,
    width: moderateScale(15),
    height: moderateScale(15),
    alignSelf: 'center',
  },
  MoreRestaurants: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  RestaurantsDelivery: {
    fontSize: 15,
    color: color.grey,
    fontWeight: '300',
  },
  FeaturedView: {
    alignSelf: 'center',
    marginTop: moderateScale(15),
  },
  Featured: {
    fontSize: 15,
    color: color.grey,
    fontWeight: '300',
    letterSpacing: 2,
  },
  carosuelimg: {
    width: width - 40,
    height: moderateScale(200),
    opacity: 0.8,
    backgroundColor: color.Black,
    borderRadius: 20,
  },
  favmore: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
  },
  ratingdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(12),
    paddingHorizontal: moderateScale(12),
  },
  details: {
    paddingLeft: moderateScale(15),
  },
  pricefood: {
    fontSize: 14,
    color: color.grey,
    fontWeight: '400',
  },
  timing: {
    fontSize: 14,
    color: color.grey,
    fontWeight: '400',
  },
  resturantsname: {
    color: color.Black,
    fontSize: 23,
    fontWeight: '600',
  },
  rating: {
    color: color.White,
    fontSize: 13,
  },
  ratingstar: {
    flexDirection: 'row',
    backgroundColor: color.green,
    width: moderateScale(50),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  star: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  timingdelivery: {
    flexDirection: 'row',
    gap: 6,
  },
  FreeDelivery: {
    color: color.gold,
    fontSize: 14,
    fontWeight: '500',
  },
  clockwatch: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  carouelimg: {
    borderRadius: 20,
  },
  discount: {
    fontSize: 16,
    color: color.Blue,
    alignSelf: 'center',
  },
  itemdiscount: {
    flexDirection: 'row',
    marginTop: moderateScale(12),
    borderTopWidth: 1,
    borderTopColor: color.LIGHT_GREY,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: width - 80,
  },
  offer: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  mainfeatured: {
    marginVertical: moderateVerticalScale(10),
    height: moderateVerticalScale(300),
    backgroundColor: color.White,
    width: width - 40,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  add: {
    color: color.Black,
    fontSize: 12,
    fontWeight: '500',
  },
  additem: {
    backgroundColor: color.LightRed,
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: moderateScale(3),
    paddingLeft: moderateScale(6),
    paddingRight: moderateScale(6),
    borderColor: color.green,
    marginLeft: moderateScale(50),
    borderColor: color.Red,
    borderWidth: 1,
    marginTop: moderateScale(4),
  },
  // incremneyt
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
  // increment end
});
