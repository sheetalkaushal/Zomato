import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './AmountStyle';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import strings from '../../constants/lang/index';
import {AsyncRemoveData} from '../utilis/utilis';
const AmountAdd = ({navigation}) => {
  const {cartdata} = useSelector(state => state.status);
  const subgrandtotal = useSelector(state => state.status.subgrandtotal);
  return (
    <View style={style.container}>
      <View style={style.headertop}>
        <Text style={style.grandtotal}>{strings.BILL_SUMMARY}</Text>
        <View style={style.subtotalView}>
          <View style={style.totalgrand}>
            <View style={style.totalitem}>
              <Text style={style.subtotal}>{strings.Subtotal}</Text>
              <Text style={style.subgrand}>{subgrandtotal}</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cartdata}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <>
                  <View style={style.countime}>
                    <Image style={style.timewatch} source={item.timewatch} />
                    <Text>{item.time}</Text>
                  </View>
                </>
              )}
            />
          </View>
          <View style={style.gstcharges}>
            <Text style={style.gstRent}>{strings.GST_charges}</Text>
            <Image style={style.chargesimg} source={imagePath.icEmergency} />
            <Text>$00.00</Text>
          </View>
          <View style={style.grandview}>
            <Text style={style.grandcharge}>{strings.Grand_Total}</Text>
            <Text>$00.00</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 12}}
        onPress={() => AsyncRemoveData('Suggestions')}>
        <Text style={{color: 'red'}}>{strings.SignOut}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmountAdd;
