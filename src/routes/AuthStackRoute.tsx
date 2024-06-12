import React from 'react';

import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import {SignInScreen, SignUpScreen} from '../screens';

const AuthStack = createStackNavigator();

const AuthStackRoute = () => {
  const StackScreenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: '#fffefe',
    },
  };

  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={StackScreenOptions}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackRoute;
