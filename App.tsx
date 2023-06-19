/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import {View} from 'react-native';
import TabBarNavigator from './src/navigation/tabBarNavigation/TabBarNavigator';

const App = () => {
  useLayoutEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={{flex: 1}}>
      <TabBarNavigator />
    </View>
  );
};

export default App;
