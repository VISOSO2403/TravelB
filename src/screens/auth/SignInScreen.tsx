import {Keyboard, Pressable, SafeAreaView, View} from 'react-native';
import React from 'react';
import {
  InputComponent,
  LogoComponent,
  ScreenContainer,
  SectionContainer,
  TextComponent,
} from '../../components';
import {Button, TextInput} from 'react-native-paper';
import RowContainer from '../../components/containers/RowContainer';
import {Formik} from 'formik';

const SignInScreen = () => {
  return (
    <ScreenContainer>
      <Pressable onPress={Keyboard.dismiss}>
        <SafeAreaView style={{}} />
        <LogoComponent />

        <SectionContainer>
          <TextComponent text="Bienvenido de vuelta" font="700" size={28} />
          <TextComponent text="Ingresar" />
        </SectionContainer>

        <SectionContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => console.log(values)}>
            <View>
              <InputComponent placeholder="Correo" />
              <InputComponent placeholder="Contraseña" secureTextEntry />
            </View>
          </Formik>

          <RowContainer styles={{alignSelf: 'flex-end'}}>
            <Button onPress={() => {}} mode="text">
              Olvidaste tu contraseña?
            </Button>
          </RowContainer>
        </SectionContainer>
      </Pressable>
    </ScreenContainer>
  );
};

export default SignInScreen;
