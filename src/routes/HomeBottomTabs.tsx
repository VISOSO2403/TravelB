import {View, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {
  CameraScreen,
  HomeScreen,
  ProfileScreen,
  RecordScreen,
  WalletScreen,
} from '../screens';

const HomeTabs = createBottomTabNavigator();

const HomeBottomTabs = () => {
  const bottomTabOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      height: Platform.OS === 'ios' ? 90 : 60,
    },
  };

  return (
    <HomeTabs.Navigator
      screenOptions={bottomTabOptions}
      initialRouteName="Mapa">
      <HomeTabs.Screen name="Mapa" component={HomeScreen} />
      <HomeTabs.Screen name="Cartera" component={WalletScreen} />
      <HomeTabs.Screen name="QR" component={CameraScreen} />
      <HomeTabs.Screen name="Historial" component={RecordScreen} />
      <HomeTabs.Screen name="Profile" component={ProfileScreen} />
    </HomeTabs.Navigator>
  );
};

export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeBottomTabs;
