import { StyleSheet } from "react-native";
import color from "../../style/color";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
export const style=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B,
        marginHorizontal: moderateScale(10),
      },
})