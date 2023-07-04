import {Dimensions, StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  bannerheader: {
    backgroundColor: color.darkBrown_Black,
    height: moderateScale(90),
    width: moderateScale(390),
    marginTop: moderateScale(10),
    top: 0,
    left: 0,
    right: 0,
  },
  locationchange: {
    tintColor: color.White,
  },
  content: {
    color: color.White,
  },
  location: {
    color: color.LIGHT_GREY,
  },
  profile: {
    borderRadius: 90,
    marginRight: 30,
  },
  sreachbar: {
    borderWidth: 1,
    borderColor: color.brown,
    height: moderateVerticalScale(47),
    alignSelf: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    backgroundColor: color.brown,
  },
  sreachimg: {
    height: moderateVerticalScale(20),
    width: moderateScale(20),
    tintColor: color.Red,
  },
  sreachbartxt: {
    width: '88%',
    marginLeft: moderateScale(5),
    color: color.White,
    fontSize: 17,
    fontWeight: '400',
  },
  headerView: {
    backgroundColor: color.darkBrown_Black,
    paddingBottom: moderateScale(12),
  },
  headerimgview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: moderateScale(20),
  },
  goldview: {
    backgroundColor: color.darkBrown_Black,
    paddingVertical: moderateVerticalScale(25),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  goldimg: {
    width: moderateScale(180),
    height: moderateScale(130),
    borderRadius: 20,
    borderColor: color.brown,
    borderWidth: 1,
  },
  listView: {
    flexDirection: 'row',
    marginLeft: moderateScale(7),
    marginRight: moderateScale(7),
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
  flatitemView: {
    borderWidth: 1,
    padding: moderateScale(10),
    flexDirection: 'row',
    borderColor: color.sliver,
    height: moderateVerticalScale(40),
    borderRadius: 10,
    backgroundColor: color.White,
    elevation: 1,
    gap: 3,
  },
  dining: {
    width: moderateScale(350),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  diningDelight: {
    marginHorizontal: moderateScale(10),
  },
  resturantView: {
    backgroundColor: color.light_sky,
    paddingVertical: moderateVerticalScale(16),
  },
  suggestion1: {
    width: '14%',
  },
  suggestion2: {
    width: '14%',
  },
  suggestionview: {
    marginTop: moderateScale(0),
  },
  pickedfood: {
    color: color.orange_light,
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
  desinationimg: {
    height: moderateScale(140),
    width: moderateScale(200),
    backgroundColor: color.Black,
    margin: moderateScale(12),
    borderRadius: 30,
  },
  rating: {
    color: color.White,
    fontSize: 13,
  },
  ratingstars: {
    flexDirection: 'row',
    backgroundColor: color.green,
    width: moderateScale(50),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: moderateScale(130),
    marginTop: moderateScale(95),
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
  desinationname: {
    marginLeft: moderateScale(14),
    color: color.Black,
    fontWeight: '600',
    fontSize: 16,
  },
  desinationoffprize: {
    marginLeft: moderateScale(14),
    color: color.Blue,
    fontWeight: '700',
    fontSize: 16,
  },
  favitem: {
    marginTop: moderateScale(10),
  },
  favitem1: {
    width: '12%',
  },
  favitem2: {
    width: '12%',
  },
  Lookingimg: {
    width: moderateScale(180),
    height: moderateScale(130),
    marginLeft: moderateScale(15),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  txttitle: {
    alignSelf: 'center',
    fontWeight: '600',
    marginTop: moderateScale(10),
    fontSize: 17,
    color: color.Black,
  },
  gifimg: {
    width: moderateScale(280),
    height: moderateVerticalScale(150),
    marginTop: moderateScale(20),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: color.gold,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  placebackimg: {
    width: moderateScale(150),
    height: moderateScale(180),
    marginLeft: moderateScale(15),
    borderRadius: 10,
    opacity: 0.8,
    resizeMode: 'stretch',
    color: color.Black,
  },
  content: {
    color: color.White,
  },
  bankOffers: {
    margin: moderateScale(8),
  },
  Explore: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: color.light_white,
    borderRadius: 50,
    width: moderateScale(140),
    height: moderateScale(50),
    alignSelf: 'center',
    gap: 5,
  },
  Exploretxt: {
    alignSelf: 'center',
    color: color.Red,
    fontSize: 14,
    fontWeight: '500',
  },
  exploreimg: {
    tintColor: color.Red,
    width: moderateScale(20),
    height: 20,
    alignSelf: 'center',
  },
  Bankoffer1: {
    width: '20%',
  },
  Bankoffer2: {
    width: '20%',
  },
  triesdesignation: {
    marginVertical: moderateVerticalScale(20),
  },
  lookingdesination: {
    marginVertical: moderateScale(20),
  },
  content: {
    fontSize: 20,
    color: color.White,
  },
  contentview: {
    marginTop: moderateScale(100),
    marginLeft: moderateVerticalScale(10),
  },
  PopularRestaurants: {
    marginRight: moderateScale(70),
  },
  ratingdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(12),
    paddingHorizontal: moderateScale(12),
  },
  details: {
    marginVertical: moderateScale(23),
  },
  carosuelimg: {
    width: width - 40,
    height: moderateScale(200),
    opacity: 0.6,
    backgroundColor: color.Black,
    borderRadius: 20,
  },
  favmore: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
  },
  resturantsname: {
    color: color.Black,
    fontSize: 16,
    fontWeight: '400',
  },
  carouelimg: {
    borderRadius: 20,
  },
  mainfeatured: {
    marginVertical: moderateVerticalScale(10),
    height: moderateScale(300),
    backgroundColor: color.White,
    width: width - 40,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  crosuelview: {
    marginTop: moderateScale(130),
  },
  restaurant: {
    color: color.White,
    fontSize: 23,
    fontWeight: '800',
    marginLeft: moderateScale(20),
  },
  starbarRatingview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
  },
  items: {
    color: color.light_white,
    fontSize: 15,
    fontWeight: '600',
  },
  Extraoofer: {
    color: color.Blue,
    fontWeight: '700',
    marginLeft: moderateScale(12),
    fontSize: 15,
  },
  timing: {
    fontSize: 15,
    color: color.Black,
  },
});
