import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './CartStyle';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {useSelector} from 'react-redux';
import {AsyncSendData, GetAsync} from '../utilis/utilis';
import {dataremove, decrease, increase} from '../../redux/actions/action';
import {moderateScale} from 'react-native-size-matters';

const CartScreen = ({navigation}) => {
  const val = useSelector(state => state.status.value);
  const carddata = useSelector(state => state.status.carddata);
  useEffect(() => {
    AsyncSendData('Dataofcart', carddata).then(res => {
      GetAsync('Dataofcart')
        .then(res => console.log(res))
        .catch(() => {});
    });
  }, [carddata]);
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

        {/* data start*/}
        <View style={style.flatitems}>
          <FlatList
            style={{margin: 3}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <>
                <View style={style.orderitem}>
                  <TouchableOpacity style={style.items}>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={style.backimg}
                      source={item.image}>
                      <Text style={style.offprice}>{item.title1}</Text>
                      <Text style={style.priceset}>{item.title2}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.itemname}>
                    <Text style={style.laPinoz}>{item.title3}</Text>
                  </TouchableOpacity>
                  <View style={style.datacount}>
                    <View style={style.selectdata}>
                      <TouchableOpacity
                        onPress={() => decrease(val)}
                        style={style.decrement}>
                        <Text style={style.decrmentcontent}>-</Text>
                      </TouchableOpacity>
                      <Text style={style.incrementtxt}>{val}</Text>
                      <TouchableOpacity
                        onPress={() => increase(val)}
                        style={style.increment}>
                        <Text style={style.contentincrement}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={style.remove}>
                      <TouchableOpacity onPress={() => dataremove(index)}>
                        <Text style={style.removedata}>{strings.Remove}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            )}
          />
        </View>
        {/* dataend */}
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
