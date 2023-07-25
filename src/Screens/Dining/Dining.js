import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderComp from '../../Components/HeaderComp';
import {style} from './DiningStyle';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang/index';
import Advertise from '../../Components/Advertise';
const {width, height} = Dimensions.get('window');
export const SLIDER_WIDTH = width / 1.1;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import Carousel from 'react-native-snap-carousel';
import {postAllProducts} from '../../redux/actions/actionApi';
const DATA = [
  {
    id: 1,
    desinationimg: 'https://pbs.twimg.com/media/C8Bp_Y3VUAAXLnm.jpg',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Zeek,
    desinationoffprize: strings.FlatForty,
  },
  {
    id: 2,
    desinationimg:
      'https://b.zmtcdn.com/data/pictures/2/122452/e8cea5705f07f1d6510d7e254615a080_featured_v2.jpg',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.The_Brew_Estate,
    desinationoffprize: strings.OFFWithBankOff,
  },
  {
    id: 3,
    desinationimg:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/t/m/p47516-15449676395c1655d7341ad.jpg?w=400',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Qizo,
    desinationoffprize: strings.Flatthirty,
  },
  {
    id: 4,
    desinationimg:
      'https://b.zmtcdn.com/data/pictures/4/20522184/d1531220da365dbab4c3e4e8a8ecbc38.jpg?fit=around|750:500&crop=750:500;*,*',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Roadies_Koffeeh,
    desinationoffprize: strings.Flatthirty,
  },
  {
    id: 5,
    desinationimg:
      'https://b.zmtcdn.com/data/pictures/5/20156555/d1e66b69ef2bd6f63fd8761229458aed.jpg?fit=around|750:500&crop=750:500;*,*',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Kakuna,
    desinationoffprize: strings.FlatTWEnty,
  },
  {
    id: 6,
    desinationimg:
      'https://d24l7ypac8dw56.cloudfront.net/MenuImages/Prank3-84149-51027.jpg',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Prankster,
    desinationoffprize: strings.flatdiscount,
  },
  {
    id: 7,
    desinationimg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_LQNB2nAGZO-j8jerb9eTDTUueHICZoc3GQx7Ev9SpCbXDfVFYiFA5mi09ZbGktbFg0&usqp=CAU',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.The_Chocolate,
    desinationoffprize: strings.flatdiscount,
  },
  {
    id: 8,
    desinationimg:
      'https://media-cdn.tripadvisor.com/media/photo-s/06/24/0f/1a/le-boulevard-restaurant.jpg',
    rating: strings.rating,
    star: imagePath.icstar,
    desinationname: strings.Boulevard,
    desinationoffprize: strings.FlatTWEnty,
  },
];
const LookingData = [
  {
    id: 1,
    Lookingimg:
      'https://thumbs.dreamstime.com/b/sign-open-door-restaurant-open-signboard-open-sign-open-door-restaurant-open-signboard-191345799.jpg',
    txttitle: strings.Newly_Open,
  },
  {
    id: 2,
    Lookingimg:
      'https://img.freepik.com/free-photo/close-up-nightlife-drinks-bar_23-2149088558.jpg',
    txttitle: strings.NightLife_Drinks,
  },
  {
    id: 3,
    Lookingimg:
      'https://d24l7ypac8dw56.cloudfront.net/MenuImages/Prank3-84149-51027.jpg',
    txttitle: strings.Famliy_Dining,
  },
  {
    id: 4,
    Lookingimg: 'https://static.toiimg.com/photo/64465873.cms',
    txttitle: strings.Romatic_Places,
  },
  {
    id: 5,
    Lookingimg:
      'https://billetto.co.uk/blog/wp-content/uploads/2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg',
    txttitle: strings.Events,
  },
  {
    id: 6,
    Lookingimg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2eyGD1rX80Rm0AyAm6_G0S8nIIQqL8Lu9s42xD4IKYsOCrFe7RLx9WwL65HIRihqdb0&usqp=CAU',
    txttitle: strings.Premium_Dining,
  },
];
const MustTrisData = [
  {
    id: 1,
    placebackimg: imagePath.icinstaplaces,
    content: strings.Best_intsa,
  },
  {
    id: 2,
    placebackimg: imagePath.icNEwlyopend,
    content: strings.New_opend,
  },
  {
    id: 3,
    placebackimg: imagePath.icRewardswinner,
    content: strings.Winners_Aaward,
  },
  {
    id: 4,
    placebackimg: imagePath.iccuisiness,
    content: strings.Cuisiness,
  },
  {
    id: 5,
    placebackimg: imagePath.icBarPub,
    content: strings.BarPubs,
  },
  {
    id: 6,
    placebackimg: imagePath.icbestbreakfast,
    content: strings.Breakfast,
  },
];
const BankData = [
  {
    id: 1,
    bankofferimg: imagePath.icicibank,
  },
  {
    id: 2,
    bankofferimg: imagePath.icaubank,
  },
  {
    id: 3,
    bankofferimg: imagePath.icaubank,
  },
  {
    id: 4,
    bankofferimg: imagePath.icicibank,
  },
];
const Dataitem = [
  {
    id: 1,
    image: imagePath.icbestbreakfast,
    resturantsname: strings.Hotel_Heritage,
    cashback: strings.flatdiscount,
    ExtraOffer: strings.EXtra_offer,
    timing: strings.Time,
    images: [
      {
        image: imagePath.icbestbreakfast,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.iccuisiness,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icinstaplaces,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icBarPub,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icNEwlyopend,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
    ],
  },
  {
    id: 2,
    image: imagePath.icbestbreakfast,
    resturantsname: strings.Hotel_Heritage,
    cashback: strings.flatdiscount,
    ExtraOffer: strings.EXtra_offer,
    timing: strings.Time,
    images: [
      {
        image: imagePath.icpizzaimg,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icsweetimg2,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icpizzaimg5,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icpizzaimg5,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
      {
        image: imagePath.icpizzaimg5,
        favourite: imagePath.icfavorite,
        rating: strings.rating,
        star: imagePath.icstar,
        Name: strings.Peddlers,
        items: strings.Bar_Food,
      },
    ],
  },
];
const Dining = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 50);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
  });
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  // carouelContent
  const renderItem = ({item}) => {
    return (
      <View style={style.carouelimg}>
        <ImageBackground
          imageStyle={{borderRadius: 20}}
          source={item.image}
          style={style.carosuelimg}>
          <TouchableOpacity style={style.favmore}>
            <Image source={item.favourite} />
          </TouchableOpacity>
          <TouchableOpacity style={style.crosuelview}>
            <Text style={style.restaurant}>{item.Name}</Text>

            <View style={style.starbarRatingview}>
              <View>
                <Text style={style.items}>{item.items}</Text>
              </View>
              <View style={style.ratingstar}>
                <Text style={style.rating}>{item.rating}</Text>
                <Image style={style.star} source={item.star} />
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={color.darkBrown_Black}
        translucent={true}
      />
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
          elevation: 4,
          zIndex: 1000,
        }}>
        <HeaderComp
          diningheader={style.bannerheader}
          locationChange={style.locationchange}
          contenttitle={style.content}
          locationtitle={style.location}
          profileimg={style.profile}
          location={imagePath.icLocation}
          Toptitle={strings.Bulidingloc}
          BottomTitle={strings.sector}
          arrowmore={imagePath.icarrow_more}
          Profile={imagePath.icProfile}
        />
        {/* sreachbar */}
        <View style={style.headerView}>
          <TouchableOpacity style={style.sreachbar}>
            <Image style={style.sreachimg} source={imagePath.icsreach} />
            <Text style={style.sreachbartxt}>{strings.sreach_Restaurant}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* zomatogold */}
      <ScrollView
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={style.goldview}>
          <View style={style.headerimgview}>
            <Image style={style.goldimg} source={imagePath.icZomatogold} />
            <Image style={style.goldimg} source={imagePath.icZomatoclub} />
          </View>
        </View>

        {/* flatitems */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[
            strings.Filters,
            strings.Delights,
            strings.Book_Table,
            strings.Likes,
            strings.Nearest,
            strings.Rating,
            strings.Pure_Veg,
            strings.Outdoor_Seating,
            strings.Serves_Alcohol,
            strings.Open_Now,
            strings.Cafe,
            strings.Fine_Dining,
          ]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={style.listView}>
                <View style={style.flatitemView}>
                  {item == strings.Filters ? (
                    <Image
                      style={style.fliterdownimg}
                      source={imagePath.icfilter}
                    />
                  ) : null}
                  <Text style={style.flatitemtxt}>{item}</Text>
                  {item == strings.Filters ? (
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
        <View style={style.diningDelight}>
          <Image style={style.dining} source={imagePath.icDiningdelight} />
        </View>
        <View style={style.resturantView}>
          <Advertise
            Advertisement={strings.Restaurant_suggestion}
            suggestion1={style.suggestion1}
            suggestion2={style.suggestion2}
            suggestionview={style.suggestionview}
          />
          <Text style={style.pickedfood}>{strings.picked_foodies}</Text>
          <FlatList
            style={{margin: 3}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={style.desinationimg}
                    source={{uri: item.desinationimg}}>
                    <View style={style.ratingstars}>
                      <Text style={style.rating}>{item.rating}</Text>
                      <Image style={style.star} source={item.star} />
                    </View>
                  </ImageBackground>
                  <TouchableOpacity>
                    <Text style={style.desinationname}>
                      {item.desinationname}
                    </Text>
                    <Text style={style.desinationoffprize}>
                      {item.desinationoffprize}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
        <Advertise
          Advertisement={strings.What_LOoking}
          favitem1={style.favitem1}
          favitem2={style.favitem2}
          lookingdesination={style.lookingdesination}
        />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={LookingData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Image
                  style={style.Lookingimg}
                  source={{uri: item.Lookingimg}}
                />
                <Text style={style.txttitle}>{item.txttitle}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Image style={style.gifimg} source={imagePath.icGold} />
        <Advertise
          Advertisement={strings.Must_TRIES}
          favitem1={style.favitem1}
          favitem2={style.favitem2}
          triesdesignation={style.triesdesignation}
        />
        <FlatList
          style={{margin: 3}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MustTrisData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <>
              <TouchableOpacity>
                <ImageBackground
                  imageStyle={{borderRadius: 10}}
                  style={style.placebackimg}
                  source={item.placebackimg}>
                  <View style={style.contentview}>
                    <Text style={style.content}>{item.content}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </>
          )}
        />
        <TouchableOpacity style={style.Explore}>
          <Text style={style.Exploretxt}>{strings.Explore}</Text>
          <Image style={style.exploreimg} source={imagePath.icarrowimg} />
        </TouchableOpacity>
        <View>
          <Advertise
            Advertisement={strings.AVAILABLE_bANK}
            Bankoffer1={style.Bankoffer1}
            Bankoffer2={style.Bankoffer2}
          />
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={BankData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.bankOffers}>
                  <Image source={item.bankofferimg} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Advertise
          Advertisement={strings.POPULAR_AROUND}
          favitem1={style.favitem1}
          favitem2={style.favitem2}
          PopularRestaurants={style.PopularRestaurants}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Dataitem}
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
                <TouchableOpacity style={style.details}>
                  <Text style={style.Extraoofer}>{item.ExtraOffer}</Text>
                  <TouchableOpacity style={style.ratingdetail}>
                    <Text style={style.resturantsname}>
                      {item.resturantsname}
                    </Text>

                    <View style={style.timingdelivery}>
                      <Text style={style.timing}>{item.timing}</Text>
                    </View>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Dining;
