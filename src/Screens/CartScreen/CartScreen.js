import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './CartStyle';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {useDispatch, useSelector} from 'react-redux';
import {AsyncSendData, GetAsync} from '../utilis/utilis';
import {dataremove, decrease, increase} from '../../redux/actions/action';

const CartScreen = ({navigation}) => {
  const val = useSelector(state => state.status.value);
  const {carddata} = useSelector(state => state.status);
  console.log(carddata, 'carddatacarddatacarddatacarddata');
  useEffect(() => {
    AsyncSendData('Dataofcart', carddata).then(res => {
      GetAsync('Dataofcart')
        .then(res => console.log(res))
        .catch(() => {});
    });
  }, [carddata]);

  const itemincremnet = item => {
    increase(item, id), console.log(item, 'itemobject>>>>>01');
  };

  const itemdecremnet = item => {
    decrease(item, id), console.log(item, 'itemobject>>>>>01');
  };
  return (
    <View style={style.container}>
      {/* TopView*/}
      <View style={{flex: 9}}>
        <View style={style.cartview}>
          <Text style={style.CartScreen}>{strings.Cart}</Text>
          <TouchableOpacity
            style={style.imgstyle}
            onPress={() => navigation.goBack()}>
            <Image style={style.crosimg} source={imagePath.icclear} />
          </TouchableOpacity>
        </View>

        {/* flatlist-data-start */}
        <View style={style.flatitems}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={carddata}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <>
                <View style={style.orderitem}>
                  <TouchableOpacity style={style.items}>
                    <ImageBackground
                      imageStyle={{borderRadius: 20}}
                      style={style.backimg}
                      source={item.image}>
                      <Text style={style.offprice}>{item.title1}</Text>
                      <Text style={style.priceset}>{item.title2}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.itemname}>
                    <Text style={style.laPinoz}>{item.title3}</Text>
                    <Text style={style.pizzatxt}>{item.title}</Text>
                    <View style={style.starview}>
                      <Image style={style.rating} source={imagePath.icrating} />
                      <Text>{strings.ratingstar}</Text>
                    </View>
                    <View style={style.countime}>
                      <Image style={style.timewatch} source={item.timewatch} />
                      <Text>{item.time}</Text>
                    </View>
                    <View style={style.datacount}>
                      <View style={style.selectdata}>
                        <TouchableOpacity
                          onPress={() => itemincremnet(item)}
                          style={style.decrement}>
                          <Text style={style.decrmentcontent}>-</Text>
                        </TouchableOpacity>
                        <Text style={style.incrementtxt}>{item?.qty}</Text>
                        <TouchableOpacity
                          onPress={() => itemdecremnet(item)}
                          style={style.increment}>
                          <Text style={style.contentincrement}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={style.remove}>
                        <TouchableOpacity
                          onPress={() => dataremove(index)}
                          style={style.removeitem}>
                          <Text style={style.removedata}>{strings.Remove}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          />
        </View>
        {/* flatlist-data-End */}
      </View>

      {/* Bottom View*/}
      <View style={style.Bottomview}>
        <View style={style.itemaddtview}>
          <View style={style.itemview}>
            <Text style={style.ItemADD}>{strings.Item_ADD}</Text>
            <Image style={style.imgarrow} source={imagePath.icarrow_more} />
          </View>
          <TouchableOpacity style={style.nextview}>
            <Text style={style.next}>{strings.Next}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
