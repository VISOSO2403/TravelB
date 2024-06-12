import React from 'react';
import {Pressable, Keyboard, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  InputComponent,
  LogoComponent,
  PrimaryButton,
  ScreenContainer,
  SectionContainer,
  TextComponent,
} from '../../components';
import RowContainer from '../../components/containers/RowContainer';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <LogoComponent />

          <SectionContainer>
            <TextComponent text="Bienvenido a Travel B" font="700" size={28} />
            <TextComponent text="Registrarse" />
          </SectionContainer>

          <SectionContainer>
            <InputComponent
              placeholder="Correo"
              keyboardType="email-address"
              // onChangeText={val => val}
            />
            <InputComponent
              placeholder="Contraseña"
              keyboardType="default"
              // onChangeText={val => val}
              secureTextEntry
            />
            <InputComponent
              placeholder="Contraseña"
              keyboardType="default"
              // onChangeText={val => val}
              secureTextEntry
            />
            <Text style={{fontSize: 14, textAlign: 'left'}}>
              Al crear una cuenta en nuestra aplicación aceptas los{' '}
              <TextComponent
                text="Términos y condiciones"
                styles={{color: '#491eb4'}}
                onPress={() => navigation.navigate('Terms')}
              />{' '}
              de nuestros servicios
            </Text>
            <PrimaryButton onPress={() => {}}>
              <TextComponent text="Registrarse" color="white" font="bold" />
            </PrimaryButton>
          </SectionContainer>

          {/* Sección para colocar inicio de sesión con Google y/o apple */}
          <SectionContainer>
            <RowContainer styles={{paddingVertical: 20}} isCenter>
              <View style={{flex: 1, borderWidth: 0.4}} />
              <TextComponent
                text="O con"
                size={20}
                font="bold"
                styles={{paddingHorizontal: 30}}
              />
              <View style={{flex: 1, borderWidth: 0.4}} />
            </RowContainer>
          </SectionContainer>
        </SafeAreaView>
      </Pressable>
    </ScreenContainer>
  );
};

export default SignUpScreen;
