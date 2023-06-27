import { View, Text } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { style } from './DiningStyle'

const Dining = () => {
  return (
    <View  style={style.container}>
        <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={color.LIGHT_GREY}
        translucent={true}
      />
 <HeaderComp />
    </View>
  )
}

export default Dining