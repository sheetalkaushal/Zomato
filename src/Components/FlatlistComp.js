import { View, Text ,FlatList,StyleSheet,Image} from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import color from '../style/color'
import strings from '../constants/strings'

const FlatlistComp = ({DATA,image,title1,title2,title3,title,timewatch,time}) => {

  return (
    <View>
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
                  <ImageBackground style={style.backimg} source={image}>
                    <Text style={style.offprice}>{title1}</Text>
                    <Text style={style.priceset}>{title2}</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={style.itemname}>
                  <Text style={style.laPinoz}>{title3}</Text>
                  <Text style={style.pizzatxt}>{title}</Text>
                  <View style={style.countime}>
                    <Image style={style.timewatch} source={timewatch} />
                    <Text>{time}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
    </View>
  )
}
const style=StyleSheet.create({
    backimg: {
        width: moderateScale(100),
        height: moderateVerticalScale(110),
        opacity: 0.9,
        color: color.Black,
      },
      itemname: {
        width: moderateScale(100),
        marginTop: moderateScale(12),
      },
      orderitem: {
        backgroundColor: color.White,
        flexDirection: 'row',
        marginLeft: moderateScale(9),
        borderRadius: 10,
        height: moderateScale(110),
        borderWidth: 1,
        borderColor: color.LIGHT_GREY,
      },
      offprice: {
        color: color.White,
        marginLeft: moderateScale(12),
        marginTop: moderateScale(60),
        fontSize: 14,
        fontWeight: 'bold',
      },
      priceset: {
        color: color.White,
        marginLeft: moderateScale(12),
        fontSize: 13,
        fontWeight: 'bold',
      },
      laPinoz: {
        marginLeft: moderateScale(12),
        color: color.Black,
        fontSize: 15,
        fontWeight: '700',
      },
      pizzatxt: {
        marginLeft: moderateScale(12),
        marginTop: moderateScale(3),
        color: color.sliver,
        fontWeight: '400',
        fontSize: 13,
      },
      countime: {
        flexDirection: 'row',
        gap: 4,
        alignSelf: 'center',
        marginTop: moderateScale(16),
      },
      timewatch: {
        width: 20,
        height: 20,
      },
})
export default FlatlistComp