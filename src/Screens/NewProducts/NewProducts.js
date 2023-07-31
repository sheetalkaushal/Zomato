import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './Style';
import color from '../../style/color';
import imagePath from '../../constants/imagePath';
import CustomBtn from '../../Components/CustomBtn';
import {postAllProducts} from '../../redux/actions/actionApi';
import TextInputfiled from '../../Components/TextInputfiled';
import {moderateScale} from 'react-native-size-matters';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import strings from '../../constants/lang';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const NewProducts = () => {
  const [productData, setproductdata] = useState([]);
  const [isFocusedTitle, setIsFocusedTitle] = useState(false);
  const [isFocusedPrize, setIsFocusedPrize] = useState(false);
  const [isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [isFocusedCategory, setIsFocusedCategory] = useState(false);
  const [Title, setTitle] = useState();
  const [Prize, setPrize] = useState();
  const [Description, setDescription] = useState();
  const [Category, setCategory] = useState();
  const [isErrorTitle, setIsErrorTitle] = useState(false);
  const [isErrorPrize, setIsErrorPrize] = useState(false);
  const [isErrorDescription, setIsErrorDescription] = useState(false);
  const [isErrorCategory, setIsErrorCategory] = useState(false);
  const [selectImage, setselectImage] = useState('');

  const handleFocus = stateChange => {
    stateChange(true);
  };
  const handleBlur = stateChange => {
    stateChange(false);
  };

  // product validation
  const saveData = async () => {
    if (!Title) {
      setIsErrorTitle(true);
    } else {
      setIsErrorTitle(false);
    }

    if (!Prize) {
      setIsErrorPrize(true);
    } else {
      setIsErrorPrize(false);
    }

    if (!Description) {
      setIsErrorDescription(true);
    } else {
      setIsErrorDescription(false);
    }

    if (!Category) {
      setIsErrorCategory(true);
    } else {
      setIsErrorCategory(false);
    }
    // post Api
    const postingdata = {
      title: Title,
      price: Prize,
      description: Description,
      image: selectImage,
      category: Category,
    };
    console.log(postingdata, 'post>>');

    await postAllProducts(postingdata)
      .then(res => {
        setproductdata(res.data);
        console.log(res.data, 'resresresresresresres');
      })
      .catch(er => console.log(er, 'erererer'));
  };
  // ImagePicker
  const imagePicker = () => {
    let options = {
      storageOption: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      console.log('imagepath>>12===', response?.assets[0]?.uri);
      setselectImage(response?.assets[0]?.uri);
    });
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.productdetail}>
          <View style={style.productbanner}>
            <Text style={style.productfrom}>{strings.PRODUCTS_FORM}</Text>
            <View style={style.formdetail}>
              <View style={style.inputfileds}>
                <TextInputfiled
                  placeholder="Title"
                  value={Title}
                  Focus={() => handleFocus(setIsFocusedTitle)}
                  Blur={() => handleBlur(setIsFocusedTitle)}
                  onChangeText={val => setTitle(val)}
                  maxLength={15}
                  isFocused={isFocusedTitle}
                  autoFocus={true}
                />
              </View>
              {isErrorTitle ? (
                <Text style={style.validationfiled}>
                  {strings.Please_enter_Title}
                </Text>
              ) : null}
              <View style={style.inputfileds}>
                <TextInputfiled
                  placeholder="Prize"
                  value={Prize}
                  Focus={() => handleFocus(setIsFocusedPrize)}
                  Blur={() => handleBlur(setIsFocusedPrize)}
                  onChangeText={val => setPrize(val)}
                  maxLength={15}
                  keyword="numeric"
                  isFocused={isFocusedPrize}
                />
              </View>
              {isErrorPrize ? (
                <Text style={style.validationfiled}>
                  {strings.Please_enter_Prize}
                </Text>
              ) : null}
              <View style={style.inputfileds}>
                <TextInputfiled
                  placeholder="Description"
                  value={Description}
                  Focus={() => handleFocus(setIsFocusedDescription)}
                  Blur={() => handleBlur(setIsFocusedDescription)}
                  onChangeText={val => setDescription(val)}
                  multilines={true}
                  numberOfLiness={10}
                  textInput={{
                    height: moderateScale(90),
                    paddingTop: moderateScale(10),
                  }}
                  isFocused={isFocusedDescription}
                />
              </View>
              {isErrorDescription ? (
                <Text style={style.validationfiled}>
                  {strings.Please_enter_Description}
                </Text>
              ) : null}
              <View style={style.picker}>
                <TouchableOpacity style={style.pickimg} onPress={imagePicker}>
                  {selectImage?.length > 0 ? (
                    <Image
                      source={
                        selectImage == ''
                          ? imagePath.icpicture
                          : {uri: selectImage}
                      }
                      style={style.pickimg}
                    />
                  ) : (
                    <Image source={imagePath.icplus} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={style.inputfileds}>
                <TextInputfiled
                  placeholder="Category"
                  value={Category}
                  Focus={() => handleFocus(setIsFocusedCategory)}
                  Blur={() => handleBlur(setIsFocusedCategory)}
                  onChangeText={val => setCategory(val)}
                  maxLength={15}
                  isFocused={isFocusedCategory}
                />
              </View>
              {isErrorCategory ? (
                <Text style={style.validationfiled}>
                  {strings.Please_enter_Category}
                </Text>
              ) : null}
            </View>
            <CustomBtn
              title="Save"
              onPress={() => {
                saveData();
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default NewProducts;
