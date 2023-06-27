import {
  View,
  Text,
  Animated,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {Bottomtab} from '../../Navigations/BottomTab';
import HeaderComp from '../../Components/HeaderComp';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {style} from './DeliveryStyle';
import Advertise from '../../Components/Advertise';

import FlatlistComp from '../../Components/FlatlistComp';
const {width, height} = Dimensions.get('window');
export const SLIDER_WIDTH = width / 1.1;

export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import Carousel from 'react-native-snap-carousel';
import Profile from '../Profile/Profile';

const DATA = [
  {
    id: 1,
    image: imagePath.icimage1,
    title1: strings.offper,
    title2: strings.uptoOff,
    title3: strings.Verka_Express,
    title: strings.northIndian,
    timewatch: imagePath.icclockwatch,
    time: strings.timing,
  },
  {
    id: 2,
    image: imagePath.icimage2,
    title1: strings.fortyoff,
    title2: strings.uptoEighty,
    title3: strings.bhel,
    title: strings.Street,
    timewatch: imagePath.icclockwatch,
    time: strings.times,
  },
  {
    id: 3,
    image: imagePath.icimage3,
    title1: strings.sixtyoff,
    title2: strings.uptoTwenty,
    title3: strings.Pal_Dabba,
    title: strings.northIndian,
    timewatch: imagePath.icclockwatch,
    time: strings.clocktime,
  },
  {
    id: 4,
    image: imagePath.icimage4,
    title1: strings.offper,
    title2: strings.uptoOff,
    title3: strings.La_pinoz,
    title: strings.Pizza,
    timewatch: imagePath.icclockwatch,
    time: strings.timing,
  },
  {
    id: 5,
    image: imagePath.icimage5,
    title1: strings.fortyoff,
    title2: strings.uptoEighty,
    title3: strings.NewSweets,
    title: strings.northIndian,
    timewatch: imagePath.icclockwatch,
    time: strings.clocktime,
  },
  {
    id: 6,
    image: imagePath.icimage6,
    title1: strings.sixtyoff,
    title2: strings.uptoTwenty,
    title3: strings.Home_Dinners,
    title: strings.northIndian,
    timewatch: imagePath.icclockwatch,
    time: strings.timing,
  },
  {
    id: 7,
    image: imagePath.icimage7,
    title1: strings.offper,
    title2: strings.uptoOff,
    title3: strings.Bakingo,
    title: strings.Bakery,
    timewatch: imagePath.icclockwatch,
    time: strings.times,
  },
  {
    id: 8,
    image: imagePath.icimage8,
    title1: strings.sixtyoff,
    title2: strings.uptoTwenty,
    title3: strings.National,
    title: strings.Bakery,
    timewatch: imagePath.icclockwatch,
    time: strings.clocktime,
  },
];
const Explore = [
  {
    id: 1,
    Selections: imagePath.icanimatedorder,
    txt1: strings.offers,
    txt2: strings.flatdiscount,
    color: color.Blue,
    fontbold: '800',
  },
  {
    id: 2,
    Selections: imagePath.icGourmet,
    txt1: strings.Gourmet,
    txt2: strings.Selections,
  },
  {
    id: 3,
    Selections: imagePath.icHealthy,
    txt1: strings.Healthy,
    txt2: strings.Curated_dishes,
  },
];
const items = [
  {id: 1, foodimg: imagePath.icsweetimg1, txttitle: strings.Pizza},
  {id: 2, foodimg: imagePath.icburger, txttitle: strings.Burger},
  {id: 3, foodimg: imagePath.iccakes, txttitle: strings.Cakes},
  {id: 4, foodimg: imagePath.icchiken, txttitle: strings.Chiken},
  {id: 5, foodimg: imagePath.icnonveg, txttitle: strings.VegThali},
  {id: 6, foodimg: imagePath.icnoodles, txttitle: strings.Noodles},
  {id: 7, foodimg: imagePath.icbiryani, txttitle: strings.Biryani},
  {id: 8, foodimg: imagePath.icsamosa, txttitle: strings.Samosa},
  {id: 9, foodimg: imagePath.icroll, txttitle: strings.Roll},
  {id: 10, foodimg: imagePath.icshake, txttitle: strings.Shake},
  {id: 11, foodimg: imagePath.icparatha, txttitle: strings.Paratha},
  {id: 12, foodimg: imagePath.icsandwich, txttitle: strings.Sandwich},
  {id: 13, foodimg: imagePath.icsouthindian, txttitle: strings.SouthIndian},
  {id: 14, foodimg: imagePath.icPanner, txttitle: strings.Panner},
];
const itemData = [
  {
    id: 1,
    pizzaimg: imagePath.icpizzaimg,
    rating: strings.rating,
    star: imagePath.icstar,
    resturantsname: strings.RestaurantName_Captain,
    pricefood: strings.price_Food,
    timing: strings.timing_delivery,
    FreeDelivery: strings.Free_delivery,
    offer: imagePath.icanimatedorder,
    discount: strings.offPer,
    images: [
      {
        image: imagePath.icpizzaimg1,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icpizzaimg2,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icpizzaimg3,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icpizzaimg4,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icpizzaimg5,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
    ],
  },
  {
    id: 2,
    pizzaimg: imagePath.icsweetimg1,
    resturantsname: strings.RestaurantName_Nand,
    rating: strings.rating,
    star: imagePath.icstar,
    pricefood: strings.Mithai,
    timing: strings.Deliverytime,
    FreeDelivery: strings.Free_delivery,
    offer: imagePath.icanimatedorder,
    discount: strings.get_all_items,
    images: [
      {
        image: imagePath.icsweetimg1,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icsweetimg2,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icsweetimg3,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icsweetimg4,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
      {
        image: imagePath.icsweetimg5,
        favourite: imagePath.icfavorite,
        more: imagePath.icmore,
      },
    ],
  },
];

const renderItem = ({item}) => {
  return (
    <View style={style.carouelimg}>
      <ImageBackground source={item.image} style={style.carosuelimg}>
        <TouchableOpacity style={style.favmore}>
          <Image source={item.favourite} />
          <Image source={item.more} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const Delivery = ({navigation}) => {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [favourite, setfavourite] = useState(imagePath.icfavorite);
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={color.LIGHT_GREY}
        translucent={true}
      />
      <HeaderComp
        location={imagePath.icLocation}
        Toptitle={strings.Bulidingloc}
        BottomTitle={strings.sector}
        arrowmore={imagePath.icarrow_more}
        ChangeLang={imagePath.icTranslate}
        Profile={imagePath.icProfile}
        // onpress={() => {
        //   Alert.alert('navigation()')
        //   // navigation.navigate('Profile');
        // }}
      />
      <TouchableOpacity style={style.sreachbar}>
        <Image style={style.sreach} source={imagePath.icsreach} />
        <Text style={style.sreachbartxt}>{strings.Restaurant}</Text>
        <Image style={style.mic} source={imagePath.icmic} />
      </TouchableOpacity>
      <ScrollView>
        <Image style={style.gifimg} source={imagePath.icAnimatedgif} />
        <Advertise Advertisement={strings.Recommend} />
        <FlatList
          style={{margin: 3}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <>
              <View style={style.orderitem}>
                <TouchableOpacity style={style.items}>
                  <ImageBackground style={style.backimg} source={item.image}>
                    <Text style={style.offprice}>{item.title1}</Text>
                    <Text style={style.priceset}>{item.title2}</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={style.itemname}>
                  <Text style={style.laPinoz}>{item.title3}</Text>
                  <Text style={style.pizzatxt}>{item.title}</Text>
                  <View style={style.countime}>
                    <Image style={style.timewatch} source={item.timewatch} />
                    <Text>{item.time}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
        <Advertise
          Advertisement={strings.Explore}
          Explore1={style.explore1}
          Explore2={style.explore2}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Explore}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={style.exploreoffer}>
                <Image style={style.exploreitem} source={item.Selections} />
                <Text style={{...style.txtexplore1, fontWeight: item.fontbold}}>
                  {item.txt1}
                </Text>
                <Text
                  style={{
                    ...style.txtexplore2,
                    color: item.color,
                    fontWeight: item.fontbold,
                  }}>
                  {item.txt2}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <Advertise
          Advertisement={strings.What_On_Your_MIND}
          favitem1={style.favitem1}
          favitem2={style.favitem2}
          favitem={style.favitem}
        />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={style.fooditemselect}>
                <Image style={style.foodimg} source={item.foodimg} />
                <Text style={style.txttitle}>{item.txttitle}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Advertise
          Advertisement={strings.All_Restaurants}
          Restaurant1={style.Restaurant1}
          Restaurant2={style.Restaurant2}
        />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[
            strings.Sort,
            strings.Likes,
            strings.Award_winners,
            strings.Nearest,
            strings.Great_offers,
            strings.Rating,
            strings.Previously_Ordered,
            strings.Pure_Veg,
            strings.Cuisines,
          ]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={style.listView}>
                <View style={style.flatitemView}>
                  {item == strings.Sort ? (
                    <Image
                      style={style.fliterdownimg}
                      source={imagePath.icfilter}
                    />
                  ) : null}
                  <Text style={style.flatitemtxt}>{item}</Text>
                  {item == strings.Sort || item == strings.Cuisines ? (
                    <Image
                      style={style.fliterdownimg}
                      source={imagePath.icdown}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={style.MoreRestaurants}>
          <Text style={style.RestaurantsDelivery}>
            {strings.RestaurantsDelivery}
          </Text>
        </View>
        <View style={style.FeaturedView}>
          <Text style={style.Featured}>{strings.Featured}</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={itemData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={style.mainfeatured}>
                <Carousel
                  autoplay={true}
                  loop={true}
                  horizontal
                  ref={isCarousel}
                  data={item.images}
                  renderItem={renderItem}
                  sliderWidth={width - 40}
                  itemWidth={width - 40}
                  onSnapToItem={index => setIndex(index)}
                />
                <View>
                  <TouchableOpacity style={style.ratingdetail}>
                    <Text style={style.resturantsname}>
                      {item.resturantsname}
                    </Text>
                    <View style={style.ratingstar}>
                      <Text style={style.rating}>{item.rating}</Text>
                      <Image style={style.star} source={item.star} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.details}>
                    <Text style={style.pricefood}>{item.pricefood}</Text>

                    <View style={style.timingdelivery}>
                      <Image
                        style={style.clockwatch}
                        source={imagePath.icclockwatch}
                      />
                      <Text>
                        <Text style={style.timing}>{item.timing}</Text>
                        <Text style={style.FreeDelivery}>
                          {item.FreeDelivery}
                        </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.itemdiscount}>
                    <Image style={style.offer} source={item.offer} />
                    <Text style={style.discount}>{item.discount}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Delivery;
