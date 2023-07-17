import AsyncStorage from "@react-native-async-storage/async-storage";
import { datasend } from "../redux/actions/action";
export const GetAsync = async (key) => {
  let userData = await AsyncStorage.getItem(key);
  let allData = await JSON.parse(userData);
  if (allData) {
    datasend(true);
  }
};
export const AsyncSendData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("error occured", e);
  }
};
export const AsyncRemoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    datasend(false);
  } catch (e) {
    console.log("error occured", e);
  }
};
