import {
  View,
  Text,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import color from '../../style/color';
import {style} from './ProfileStyle';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang/index';
import { useSelector } from 'react-redux';

const Data = [
  {
    id: 1,
    imgorders: imagePath.icShopping,
    title: strings.orders,
    navigation: imagePath.icnavigation,
  },
  {
    id: 2,

    imgorders: imagePath.icHeart,
    title: strings.Favorite_orders,
    navigation: imagePath.icnavigation,
  },
  {
    id: 3,

    imgorders: imagePath.icAssignment,
    title: strings.Address_Book,
    navigation: imagePath.icnavigation,
  },
  {
    id: 4,

    imgorders: imagePath.icVisibilty,
    title: strings.Hidden_Restaurants,
    navigation: imagePath.icnavigation,
  },
  {
    id: 5,

    imgorders: imagePath.icsmstxt,
    title: strings.Food_ordering_help,
    navigation: imagePath.icnavigation,
  },
];

const OrdersData = [
  {
    id: 1,
    imgordering: imagePath.icShopping,
    title2: strings.orders,
    navigation2: imagePath.icnavigation,
  },
  {
    id: 2,
    imgordering: imagePath.icsmstxt,
    title2: strings.Grocery_ordering,
    navigation2: imagePath.icnavigation,
  },
];
const Dealingdata = [
  {
    id: 1,
    orderimg: imagePath.icUpdate,
    title3: strings.Deal_tansaction,
    navigation3: imagePath.icnavigation,
  },
  {
    id: 2,
    orderimg: imagePath.icReward,
    title3: strings.Dining_reward,
    navigation3: imagePath.icnavigation,
  },
  {
    id: 3,
    orderimg: imagePath.icDining,
    title3: strings.Slot_booking,
    navigation3: imagePath.icnavigation,
  },
  {
    id: 4,
    orderimg: imagePath.icsmstxt,
    title3: strings.slot_help,
    navigation3: imagePath.icnavigation,
  },
  {
    id: 5,
    orderimg: imagePath.iclocationQues,
    title3: strings.Frequently_ques,
    navigation3: imagePath.icnavigation,
  },
];
const EventData = [
  {
    id: 1,
    imgevent: imagePath.icTicket,
    title4: strings.Events_tickets,
    navigation4: imagePath.icnavigation,
  },
  {
    id: 2,
    imgevent: imagePath.icsmstxt,
    title4: strings.Evnet_help,
    navigation4: imagePath.icnavigation,
  },
  {
    id: 3,
    imgevent: imagePath.iclocationQues,
    title4: strings.Frequently_ques,
    navigation4: imagePath.icnavigation,
  },
];
const MoneyData = [
  {
    id: 1,
    moneyimg: imagePath.icGiftCard,
    title5: strings.Buy_gift,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 2,
    moneyimg: imagePath.icClaimCard,
    title5: strings.Claim_gift,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 3,
    moneyimg: imagePath.icUpdate,
    title5: strings.Gift_CardOrder,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 4,
    moneyimg: imagePath.icZomato,
    title5: strings.Zomato_credits,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 5,
    moneyimg: imagePath.icsmstxt,
    title5: strings.Gift_Card_help,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 6,
    moneyimg: imagePath.icwallet,
    title5: strings.Zomato_wallet,
    navigation5: imagePath.icnavigation,
  },
];
const MoreData = [
  {
    id: 1,
    Moreimg: imagePath.icTranslate,
    title6: strings.Choose_Lang,
    navigation7: imagePath.icnavigation,
  },
  {
    id: 2,
    Moreimg: imagePath.icabout,
    title6: strings.About,
    navigation7: imagePath.icnavigation,
  },
  {
    id: 3,
    Moreimg: imagePath.icfeedback,
    title6: strings.Send_Feedback,
    navigation7: imagePath.icnavigation,
  },
  {
    id: 4,
    Moreimg: imagePath.icReceipt,
    title6: strings.Get_receipt,
    navigation7: imagePath.icnavigation,
  },
  {
    id: 5,
    Moreimg: imagePath.icEmergency,
    title6: strings.Emergency,
    navigation7: imagePath.icnavigation,
  },
  {
    id: 6,
    Moreimg: imagePath.icLogout,
    title6: strings.Logout,
    navigation7: imagePath.icnavigation,
  },
];
const Profile = ({navigation}) => {
  const value = useSelector((state) =>state.status.user);
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={color.light_white}
        translucent={true}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={style.arrow}>
          <Image source={imagePath.icarrowback} />
        </TouchableOpacity>
        <View style={style.profileview}>
          <View style={style.profilename}>
            <TouchableOpacity>
              <Text style={style.profiletxt}>{value.Email}</Text>

              <Text style={style.ViewActivity}>
                {strings.ViewProfile}
                <Image
                  style={style.arrowright}
                  source={imagePath.icarrowright}
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.profileviewOver}>
              <Image style={style.profileimg} source={imagePath.icProfile} />
              <View style={style.profilepercent}>
                <Text style={style.percenttxt}>{strings.percentage}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={style.mainicons}>
          <TouchableOpacity style={style.allicon}>
            <Image source={imagePath.icfavoriteborder} />
            <Text style={style.imgicon}>{strings.Likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.allicon}>
            <Image source={imagePath.icPayment} />
            <Text style={style.imgicon}>{strings.Payments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.allicon}>
            <Image source={imagePath.icSetting} />
            <Text style={style.imgicon}>{strings.Setting}</Text>
          </TouchableOpacity>
        </View>
        {/* upadteapp */}
        <TouchableOpacity style={style.updateView}>
          <View style={style.appimgview}>
            <View style={style.update}>
              <Image style={style.updateimg} source={imagePath.icAppUpdate} />
            </View>
            <Text style={style.updatetxt}>{strings.App_Update_available}</Text>
          </View>
          <Image style={style.arrownext} source={imagePath.icnavigation} />
        </TouchableOpacity>
        {/* ratingbtn */}
        <TouchableOpacity style={style.updateView}>
          <View style={style.appimgview}>
            <View style={style.update}>
              <Image style={style.updateimg} source={imagePath.icstarborder} />
            </View>
            <Text style={style.updatetxt}>{strings.Your_rating}</Text>
          </View>
          <View style={style.ratingarrow}>
            <View style={style.ratingborder}>
              <Image
                style={style.starborder}
                source={imagePath.icstar_fillup}
              />
            </View>
            <Image style={style.arrownext} source={imagePath.icnavigation} />
          </View>
        </TouchableOpacity>
        {/* Foodorder */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Food_Orders}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={Data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image style={style.updateimg} source={item.imgorders} />
                    </View>
                    <Text style={style.updatetxt}>{item.title}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
        {/* Predicition */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Games}</Text>
          </View>
          <TouchableOpacity style={style.settingview}>
            <View style={style.appimgview}>
              <View style={style.update}>
                <Image
                  style={style.updateimg}
                  source={imagePath.icPrediction}
                />
              </View>
              <Text style={style.updatetxt}>{strings.Zomato_Prediction}</Text>
            </View>
            <Image style={style.arrownext} source={imagePath.icnavigation} />
          </TouchableOpacity>
        </View>
        {/* Awards */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Restaurant_Awards}</Text>
          </View>
          {/* Wining */}
          <TouchableOpacity style={style.settingview}>
            <View style={style.appimgview}>
              <View style={style.update}>
                <Image style={style.updateimg} source={imagePath.icWinning} />
              </View>
              <Text style={style.updatetxt}>{strings.Wining_restaurants}</Text>
            </View>
            <Image style={style.arrownext} source={imagePath.icnavigation} />
          </TouchableOpacity>
        </View>
        {/* RewardGold */}
        <TouchableOpacity style={style.updateView}>
          <View style={style.appimgview}>
            <View style={style.update}>
              <Image style={style.updateimg} source={imagePath.icCrown} />
            </View>
            <Text style={style.updatetxt}>{strings.Zomato_Gold}</Text>
          </View>
          <Image style={style.arrownext} source={imagePath.icnavigation} />
        </TouchableOpacity>
        {/* Grocery */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Grocery_Orders}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={OrdersData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image
                        style={style.updateimg}
                        source={item.imgordering}
                      />
                    </View>
                    <Text style={style.updatetxt}>{item.title2}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation2} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
        {/* Dining */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Dining}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={Dealingdata}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image style={style.updateimg} source={item.orderimg} />
                    </View>
                    <Text style={style.updatetxt}>{item.title3}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation3} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
        {/* events */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>Events</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={EventData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image style={style.updateimg} source={item.imgevent} />
                    </View>
                    <Text style={style.updatetxt}>{item.title4}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation4} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
        {/* Money */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.Money}</Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={MoneyData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image style={style.updateimg} source={item.moneyimg} />
                    </View>
                    <Text style={style.updatetxt}>{item.title5}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation5} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
        {/*MoreAbout  */}
        <View style={style.mainview}>
          <View style={style.headingview}>
            <Text style={style.headingtxt}>{strings.More}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={MoreData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={style.settingview}>
                  <View style={style.appimgview}>
                    <View style={style.update}>
                      <Image style={style.updateimg} source={item.Moreimg} />
                    </View>
                    <Text style={style.updatetxt}>{item.title6}</Text>
                  </View>
                  <Image style={style.arrownext} source={item.navigation7} />
                </TouchableOpacity>
                <View style={style.borderbottom}></View>
              </>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
