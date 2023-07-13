import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './AmountStyle';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import strings from '../../constants/strings';
import {dataremove} from '../../redux/actions/action';

const AmountAdd = ({navigation}) => {
  const {cartdata, totalamount, qty} = useSelector(state => state.status);
  return (
    <View style={style.container}>
      <View style={style.headertop}>
        <Text style={style.grandtotal}>{strings.BILL_SUMMARY}</Text>
        <View style={style.subtotalView}>
          <View style={style.totalgrand}>
            <Text style={style.subtotal}>{strings.Subtotal}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cartdata}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <>
                  <View style={style.orderitem}>
                    <Text style={style.money}>{item.money}</Text>
                    <View style={style.datacount}>
                      <View style={style.selectdata}>
                        <Text style={style.incrementtxt}>{totalamount}</Text>
                      </View>
                    </View>
                  </View>
                </>
              )}
            />
          </View>
          <View style={style.gstcharges}>
            <Text style={style.gstRent}>{strings.GST_charges}</Text>
            <Image style={style.chargesimg} source={imagePath.icEmergency} />
            <Text style={{marginLeft: 87}}>$00.00</Text>
          </View>
          <View style={style.grandview}>
            <Text style={style.grandcharge}>{strings.Grand_Total}</Text>
            <Text>$00.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AmountAdd;
