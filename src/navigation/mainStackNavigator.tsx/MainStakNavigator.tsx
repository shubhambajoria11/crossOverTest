import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Activity from '../../screens/Activity';
import Bookmarks from '../../screens/Bookmarks';
import Discover from '../../screens/Discover';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

export type RootStackParamList = {
  Home: {};
  Discover: {};
  Activity: {};
  Bookmarks: {};
  Profile: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStakNavigator: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStakNavigator;
