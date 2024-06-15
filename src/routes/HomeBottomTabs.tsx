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
import {IconComponent, TextComponent} from '../components';

const HomeTabs = createBottomTabNavigator();

const HomeBottomTabs = () => {
  const bottomTabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 27,
      left: 16,
      right: 16,
      height: 72,
      elevation: 0,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
    },
  };

  return (
    <HomeTabs.Navigator
      screenOptions={bottomTabOptions}
      initialRouteName="Mapa">
      <HomeTabs.Screen
        name="Mapa"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <IconComponent
                name={focused ? 'map' : 'map-outline'}
                color={focused ? '#f9e75d' : 'gray'}
              />
              <TextComponent
                text="Inicio"
                color={focused ? 'black' : 'gray'}
                styles={{marginTop: 4}}
              />
            </View>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Cartera"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <IconComponent
                name={focused ? 'wallet' : 'wallet-outline'}
                color={focused ? '#f9e75d' : 'gray'}
              />
              <TextComponent
                text="Cartera"
                color={focused ? 'black' : 'gray'}
                styles={{marginTop: 4}}
              />
            </View>
          ),
        }}
      />
      <HomeTabs.Screen
        name="QR"
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.qrIconContainer}>
              <IconComponent name="qr-code" color="black" />
            </View>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Historial"
        component={RecordScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <IconComponent
                name={focused ? 'time' : 'time-outline'}
                color={focused ? '#f9e75d' : 'gray'}
              />
              <TextComponent
                text="Historial"
                color={focused ? 'black' : 'gray'}
                styles={{marginTop: 4}}
              />
            </View>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <IconComponent
                name={focused ? 'person' : 'person-outline'}
                color={focused ? '#f9e75d' : 'gray'}
              />
              <TextComponent
                text="Perfil"
                color={focused ? 'black' : 'gray'}
                styles={{marginTop: 4}}
              />
            </View>
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};

export const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  qrIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 999,
    backgroundColor: '#f9e75d',
    marginBottom: Platform.OS === 'ios' ? 20 : 43,
  },
});

export default HomeBottomTabs;
