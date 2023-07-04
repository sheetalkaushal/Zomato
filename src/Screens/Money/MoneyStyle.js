import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  Container: {
    flex: 1,
    //  marginBottom: moderateScale(100),
    backgroundColor: color.light_white,
  },
  giftcontent: {
    marginTop: moderateScale(30),
  },
  cardviews: {
    backgroundColor: color.White,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: moderateScale(15),
  },
  giftView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.Grey,
    margin: 3,
    paddingHorizontal: moderateScale(20),
    borderRadius: 7,
    paddingVertical: moderateScale(23),
  },

  Buy: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    width: moderateScale(140),
    height: moderateScale(50),
    alignSelf: 'center',
    gap: 5,
  },
  Buytxt: {
    alignSelf: 'center',
    color: color.Red,
    fontSize: 14,
    fontWeight: '500',
  },
  Buyimg: {
    tintColor: color.Red,
    width: moderateScale(20),
    height: 20,
    alignSelf: 'center',
  },
  giftCards: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1,
  },
  giftcardsimg: {
    width: moderateScale(140),
    height: moderateScale(200),
  },
  settingview: {
    paddingHorizontal: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(12),
  },
  mainview: {
    backgroundColor: color.White,
    marginTop: moderateScale(12),
    borderRadius: 16,
    marginHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  borderbottom: {
    borderBottomWidth: 1,
    borderBottomColor: color.sliver,
    marginHorizontal: moderateScale(10),
  },
  updatetxt: {
    fontSize: 18,
    color: color.Black,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  arrownext: {
    alignSelf: 'center',
    tintColor: color.grey,
  },
  Title1: {
    fontSize: 15,
    color: color.grey,
    fontWeight: '400',
  },
  giftcardscontent: {
    paddingVertical: moderateScale(10),
  },
  contentscard: {
    color: color.Black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  lowergiftstyle: {
    fontSize: 15,
    fontWeight: '400',
  },
  walletview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Walletimg: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  moneyView: {
    alignItems: 'center',
    marginTop: 40,
  },
  Money: {
    color: color.White,
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 6,
  },
  BYZomato: {
    color: color.White,
    fontSize: 16,
    fontWeight: '600',
  },
  Giftwallet: {
    alignItems: 'center',
    marginTop: moderateScale(25),
  },
  upiwallet: {
    color: color.sliver,
    fontSize: 17,
    fontWeight: '400',
  },
  giftscrollview: {
    backgroundColor: color.light_white,
  },
  // header top style//
  navbarheader: {
    marginTop: moderateScale(50),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: moderateScale(50),
  },
  headerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    tintColor: color.White,
    height: moderateScale(25),
    width: moderateScale(25),
    alignSelf: 'center',
    marginLeft: moderateScale(9),
  },
  Toptitle: {
    color: color.White,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: moderateScale(4),
  },
  bannercontent: {
    width: '70%',
  },
  Toptxt: {
    flexDirection: 'row',
  },
  arrowmore: {
    height: moderateScale(20),
    width: moderateScale(20),
    alignSelf: 'center',
    tintColor: color.White,
  },
  BottomTitle: {
    fontSize: 13,
    color: color.White,
    marginLeft: moderateScale(4),
    fontWeight: '500',
  },
  translatelang: {
    backgroundColor: color.White,
    borderWidth: 1,
    width: moderateScale(35),
    height: moderateScale(35),
    justifyContent: 'center',
    borderColor: color.LIGHT_GREY,
    borderRadius: 9,
    elevation: 3,
  },
  ChangeLang: {
    width: moderateScale(18),
    height: moderateScale(18),
    alignSelf: 'center',
    tintColor: color.Black,
  },
  profile: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: 30,
  },
});
