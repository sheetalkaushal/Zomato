import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import CustomBtn from './CustomBtn';
import color from '../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
export default ({
  onPress,
  Emailtxt,
  cross,
  onRequestClose,
  visible,
  transparent,
  Fackbookicon,
  Emailicon,
  Fackbooktxt,
}) => {
  return (
    <Modal
      style={style.modalstyle}
      animationType="slide"
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={style.modalback}>
        <View style={style.backbtn}>
          <Image onPress={onPress} source={cross} />
          <TouchableOpacity style={style.facebookbtn}>
            <Image style={style.socialicon} source={Fackbookicon} />
            <Text style={style.socialtxt}>{Fackbooktxt}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.Emailbtn}>
            <Image style={style.socialicon} source={Emailicon} />
            <Text style={style.socialtxt}>{Emailtxt}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalback: {
    backgroundColor: color.White,
    height: '30%',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    marginTop: moderateVerticalScale(500),
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 4,
  },
  backbtn: {
    height: moderateVerticalScale(50),
    marginTop: moderateVerticalScale(15),
    alignItems: 'center',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: 8,
  },
  facebookbtn: {
    borderWidth: 1,
    marginTop: moderateScale(12),
    height: moderateVerticalScale(45),
    marginTop: moderateVerticalScale(15),
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    borderColor: color.sliver,
  },
  Emailbtn: {
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    marginTop: moderateScale(12),
    height: moderateVerticalScale(45),
    marginTop: moderateVerticalScale(15),
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    justifyContent: 'center',
    borderColor: color.sliver,
  },
  socialtxt: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: color.Black,
  },
  socialicon: {
    width: 19,
    height: 21,
  },
  // modalstyle:{
  //   justifyContent:"flex-end"
  // }
});
