import {View, Text} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Bottomtab} from '../../Navigations/BottomTab';
import HeaderComp from '../../Components/HeaderComp';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';

const Delivery = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
        sreachbar={imagePath.icsreach}
        mic={imagePath.icmic}
        sreachbartxt={strings.Restaurant}
      />
    </View>
  );
};

export default Delivery;
