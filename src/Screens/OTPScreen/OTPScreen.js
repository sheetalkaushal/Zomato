import {View, Text, Image} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';

const OTPScreen = () => {
  return (
    <View>
      <View>
        <Image source={imagePath.icWest_Back} />
        <Text>{strings.OTPSCREEN}</Text>
      </View>
      <View>
        <Text>{strings.Verification}</Text>
      </View>
    </View>
  );
};

export default OTPScreen;
