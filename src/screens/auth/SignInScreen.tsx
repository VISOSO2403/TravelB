import {
  Keyboard,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  InputComponent,
  LogoComponent,
  ScreenContainer,
  SectionContainer,
  TextComponent,
} from '../../components';
import RowContainer from '../../components/containers/RowContainer';
import {stylesButton} from '../../components/buttons/styles';

const SignInScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <ScreenContainer>
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <SafeAreaView style={{}} />
        <LogoComponent />

        <SectionContainer>
          <TextComponent text="Bienvenido de vuelta" font="700" size={28} />
          <TextComponent text="Ingresar" />
        </SectionContainer>

        <SectionContainer>
          <InputComponent
            onChangeText={val => setEmail(val)}
            placeholder="Correo"
            keyboardType="email-address"
          />

          <InputComponent
            onChangeText={val => val}
            placeholder="Contraseña"
            secureTextEntry
            keyboardType="default"
          />
          <RowContainer styles={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <TextComponent
                text="¿Olvidaste tu contraseña?"
                size={14}
                color="#491eb4"
              />
            </TouchableOpacity>
          </RowContainer>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={[
              stylesButton.primaryButton,
              stylesButton.shadow,
              {backgroundColor: '#f3f3f6'},
            ]}>
            <TextComponent text="INGRESAR" font="bold" />
          </TouchableOpacity>
        </SectionContainer>

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

        <RowContainer styles={{paddingVertical: 20}}>
          <TextComponent text="¿Primera vez en Travel-B?" />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 5}}
            onPress={() => {}}>
            <TextComponent text="Regístrate" color="#491eb4" />
          </TouchableOpacity>
        </RowContainer>
      </Pressable>
    </ScreenContainer>
  );
};

export default SignInScreen;
