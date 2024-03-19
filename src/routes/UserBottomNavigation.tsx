import {View, Text, Platform, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CameraScreen,
  HomeScreen,
  PerfilScreen,
  RecordScreen,
  SettingsScreen,
  WalletScreen,
} from '../screens';
import {IconComponent, TextComponent} from '../components';
import {ThemeContext} from '../context/ThemeContext';

const UserTab = createBottomTabNavigator();

export const UserBottomNavigation = () => {
  const {colors} = useContext(ThemeContext);

  const bottomScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      height: Platform.OS === 'ios' ? 90 : 60,
      backgroundColor: colors.primary,
    },
  };

  return (
    <UserTab.Navigator screenOptions={bottomScreenOptions}>
      <UserTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="map"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
                <TextComponent
                  text="Inicio"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
              </View>
            );
          },
        }}
      />
      <UserTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="wallet"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
                <TextComponent
                  text="Cartera"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
              </View>
            );
          },
        }}
      />
      <UserTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.iconContainer,
                  {
                    height: 95,
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                  },
                ]}>
                <IconComponent
                  name="scan"
                  size={75}
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
                <TextComponent
                  text="Escanea"
                  styles={{bottom: Platform.OS === 'ios' ? 47 : 50}}
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
              </View>
            );
          },
        }}
      />
      <UserTab.Screen
        name="Record"
        component={RecordScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="time"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
                <TextComponent
                  text="Historial"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
              </View>
            );
          },
        }}
      />
      <UserTab.Screen
        name="Settings"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="cog"
                  size={26}
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
                <TextComponent
                  text="Perfil"
                  color={focused ? colors.textLinks : colors.buttonTextColor}
                />
              </View>
            );
          },
        }}
      />
    </UserTab.Navigator>
  );
};

export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
