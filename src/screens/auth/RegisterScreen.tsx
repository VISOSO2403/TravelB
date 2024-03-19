import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext';
import {globalStyles} from '../../theme/globalStyles';

import auth from '@react-native-firebase/auth';

import {
  ContainerComponent,
  FabComponent,
  IconComponent,
  InputComponent,
  LogoComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const {colors} = useContext(ThemeContext);

  const RegisterFunction = () => {
    auth().createUserWithEmailAndPassword('test@gmail.com', '123456789')
  .then(() => {
    console.log('User account created & signed in!');
    Alert.alert('User account created & signed in!');
  })
  .catch(error => {
    console.error(error);
    Alert.alert('Error', error);
  });
  }

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        styles={{...globalStyles.fabPosition}}
        onPress={navigation.goBack}
      />
      <ContainerComponent isScroll>
        <SectionComponent
          styles={{marginTop: Platform.OS === 'ios' ? top - 10 : top}}>
          <LogoComponent />
        </SectionComponent>

        <SectionComponent>
          <TextComponent text="Bienvenido a Travel B" font="700" size={28} />
          <TextComponent text="Registrarse" styles={{marginBottom: 20}} />

          <InputComponent
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
          <InputComponent
            placeholder="Contraseña"
            secureTextEntry
            keyboardType="default"
          />
          <InputComponent
            placeholder="Confirmar contraseña"
            secureTextEntry
            keyboardType="default"
          />

          <Text style={{fontSize: 14, textAlign: 'left', color: colors.text}}>
            Al crear una cuenta en nuestra aplicación aceptas los{' '}
            <Text
              style={{color: colors.textLinks}}
              onPress={() => navigation.navigate('Terms')}>
              Términos y Condiciones
            </Text>{' '}
            de nuestros servicios
          </Text>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{...globalStyles.buttons, backgroundColor: colors.primary}}>
            <TextComponent
              text="Registrarse"
              size={20}
              font="bold"
              color={colors.buttonTextColor}
            />
          </RowComponent>

          <TouchableOpacity onPress={RegisterFunction}>
            <Text>
              regprueba
            </Text>
          </TouchableOpacity>

        </SectionComponent>

        <SectionComponent>
          <RowComponent styles={{marginBottom: 10}}>
            <View style={{borderWidth: 0.5, flex: 1}} />
            <TextComponent text="  Ó Con  " size={20} font="bold" />
            <View style={{borderWidth: 0.5, flex: 1}} />
          </RowComponent>

          <RowComponent
            styles={{justifyContent: 'space-around', marginBottom: 20}}>
            <TouchableOpacity>
              <IconComponent name="logo-google" size={29} color="green" />
            </TouchableOpacity>

            <TouchableOpacity>
              <IconComponent name="logo-facebook" size={35} color="blue" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
        <RowComponent>
          <TextComponent text="¿Ya tienes una cuenta?" />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 5}}
            onPress={() => navigation.navigate('Login')}>
            <TextComponent text="Ingresa" color={colors.textLinks} />
          </TouchableOpacity>
        </RowComponent>
      </ContainerComponent>
    </View>
  );
};

export default RegisterScreen;
