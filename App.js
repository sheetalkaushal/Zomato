import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './src/Navigations/Routes';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GetAsync} from './src/utilis/utilis';
const App = () => {
  useEffect(() => {
    GetAsync('Suggestions');
  });
  setTimeout(() => {
    SplashScreen.hide();
  }, 4000);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
};

export default App;
