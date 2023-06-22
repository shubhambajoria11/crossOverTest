/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import TabBarNavigator from './src/navigation/tabBarNavigation/TabBarNavigator';
import {GlobalStyles} from './src/styles/Dimen';

const App = () => {
  useLayoutEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={GlobalStyles.container}>
      <TabBarNavigator />
    </View>
  );
};

export default App;
