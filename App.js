import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/Screens/Login/Login';
const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 4000);
  return (
    <View style={{flex:1}}>
      <Login/>
     {/* <Routes /> */}
    </View>
 
 
  );
};

export default App;
