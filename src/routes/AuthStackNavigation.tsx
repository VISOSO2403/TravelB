import React, {useContext} from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import {
  ForgotScreen,
  LoginScreen,
  RegisterScreen,
  TermsScreen,
} from '../screens';
import {UserBottomNavigation} from './UserBottomNavigation';
import {ThemeContext} from '../context/ThemeContext';

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
  const {colors} = useContext(ThemeContext);

  const stackScreenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: colors.background,
    },
  };

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={stackScreenOptions}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Forgot" component={ForgotScreen} />
      <AuthStack.Screen name="Terms" component={TermsScreen} />
      <AuthStack.Screen name="Inicio" component={UserBottomNavigation} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
