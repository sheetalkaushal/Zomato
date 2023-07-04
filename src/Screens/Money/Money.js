import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import {style} from './MoneyStyle';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
const PurchaseData = [
  {
    id: 1,
    title4: strings.Claim_gift,
    Title1: strings.Add_credits,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 2,

    title4: strings.Zomato_credits,
    Title1: strings.Balance,
    navigation5: imagePath.icnavigation,
  },
  {
    id: 3,
    title4: strings.PurchaseHistory,
    navigation5: imagePath.icnavigation,
  },
];

const Money = ({navigation}) => {
  return (
    <View style={style.Container}>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={color.Black}
        translucent={true}
      />
      <ImageHeaderScrollView
        maxHeight={280}
        headerImage={imagePath.icMoneyimg}
        renderForeground={() => (
          <View>
            <View style={style.navbarheader}>
              <TouchableOpacity style={style.headerleft}>
                <Image style={style.location} source={imagePath.icLocation} />
                {/* RightSide */}
                <TouchableOpacity style={style.bannercontent}>
                  <TouchableOpacity style={style.Toptxt}>
                    <Text style={style.Toptitle}>{strings.Bulidingloc}</Text>
                    <Image
                      style={style.arrowmore}
                      source={imagePath.icarrow_more}
                    />
                  </TouchableOpacity>
                  <Text style={style.BottomTitle}>{strings.sector}</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              {/* leftside */}
              <TouchableOpacity style={style.headerRight}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Image style={style.profile} source={imagePath.icProfile} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={style.moneyView}>
              <Text style={style.Money}>{strings.Money}</Text>
              <Text style={style.BYZomato}>{strings.By_Zomato}</Text>
            </View>
            <View style={style.Giftwallet}>
              <Text style={style.upiwallet}>{strings.GIFT_CARDS_UPI}</Text>
            </View>
          </View>
        )}>
        <ScrollView style={style.giftscrollview}>
          {/* <TriggeringView onBeginHidden={() => console.log("text hidden")}><Text style={{color:"green",fontSize:30}}>helo</Text></TriggeringView> */}
          <View style={style.giftcontent}>
            <Text style={style.giftCards}>{strings.GIFT_CARDS}</Text>
            <View style={style.cardviews}>
              <View style={style.giftView}>
                <View>
                  <View style={style.giftcardscontent}>
                    <Text style={style.contentscard}>𝘨𝘪𝘧𝘵 𝘊𝘢𝘳𝘥𝘴</Text>
                  </View>
                  <Text style={style.lowergiftstyle}>{strings.Starting}</Text>
                  <Text style={style.lowergiftstyle}>
                    {strings.Buy_share_instantly}
                  </Text>
                  <Text style={style.lowergiftstyle}>
                    {strings.year_Validity}
                  </Text>
                </View>
                <Image
                  style={style.giftcardsimg}
                  source={imagePath.icgiftcards}
                />
              </View>
              <TouchableOpacity style={style.Buy}>
                <Text style={style.Buytxt}>{strings.Buy_now}</Text>
                <Image style={style.Buyimg} source={imagePath.icarrowimg} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.mainview}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={PurchaseData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity style={style.settingview}>
                    <View>
                      <Text style={style.updatetxt}>{item.title4}</Text>
                      <Text style={style.Title1}>{item.Title1}</Text>
                    </View>
                    <Image style={style.arrownext} source={item.navigation5} />
                  </TouchableOpacity>
                  <View style={style.borderbottom}></View>
                </>
              )}
            />
          </View>
          <View style={style.giftcontent}>
            <Text style={style.giftCards}>{strings.WALLET}</Text>
            <View style={style.cardviews}>
              <View style={style.giftView}>
                <View>
                  <View style={style.giftcardscontent}>
                    <Text style={style.contentscard}>
                      {strings.Zomato_Wallet}
                    </Text>
                  </View>
                  <View style={style.walletview}>
                    <Text style={style.lowergiftstyle}>
                      {strings.Zero_payment_Failures}
                    </Text>
                    <Image
                      style={{width: 20, height: 20, alignItems: 'center'}}
                      source={imagePath.icGiphyemoji}
                    />
                  </View>
                </View>
                <Image
                  style={style.Walletimg}
                  source={imagePath.iczomatowallet}
                />
              </View>
              <TouchableOpacity style={style.Buy}>
                <Text style={style.Buytxt}>{strings.Activate_Wallet}</Text>
                <Image style={style.Buyimg} source={imagePath.icarrowimg} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageHeaderScrollView>
    </View>
  );
};

export default Money;
