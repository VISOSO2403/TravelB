import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  LogoComponent,
  ScreenContainer,
  SectionContainer,
  TextComponent,
} from '../../components';

const SignInScreen = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={{}} />
      <LogoComponent />

      <SectionContainer>
        <TextComponent text="Bienvenido de vuelta" font="700" />
      </SectionContainer>
    </ScreenContainer>
  );
};

export default SignInScreen;
