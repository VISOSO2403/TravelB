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
                color={focused ? '#491eb4' : 'gray'}
              />
              <TextComponent
                text="Inicio"
                color={focused ? '#491eb4' : 'gray'}
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
                color={focused ? '#491eb4' : 'gray'}
              />
              <TextComponent
                text="Cartera"
                color={focused ? '#491eb4' : 'gray'}
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
              <IconComponent name="qr-code" color="white" />
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
                name={focused ? 'timer' : 'timer-outline'}
                color={focused ? '#491eb4' : 'gray'}
              />
              <TextComponent
                text="Historial"
                color={focused ? '#491eb4' : 'gray'}
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
                color={focused ? '#491eb4' : 'gray'}
              />
              <TextComponent
                text="Perfil"
                color={focused ? '#491eb4' : 'gray'}
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
    backgroundColor: '#491eb4',
    marginBottom: Platform.OS === 'ios' ? 20 : 43,
  },
});

export default HomeBottomTabs;
