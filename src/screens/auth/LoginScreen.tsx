import {View, TouchableOpacity, Platform} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext';
import {globalStyles} from '../../theme/globalStyles';

import {
  ContainerComponent,
  IconComponent,
  InputComponent,
  LogoComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const {colors} = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <ContainerComponent isScroll>
        <SectionComponent
          styles={{marginTop: Platform.OS === 'ios' ? top - 10 : top}}>
          <LogoComponent />
        </SectionComponent>

        <SectionComponent>
          <TextComponent text="Bienvenido de vuelta" font="700" size={28} />
          <TextComponent text="Ingresar" styles={{marginBottom: 20}} />

          <InputComponent
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
          <InputComponent
            placeholder="Contraseña"
            secureTextEntry
            keyboardType="default"
          />

          <RowComponent
            styles={{
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <TextComponent
                text="¿Olvidaste tu contraseña?"
                size={14}
                color={colors.textLinks}
              />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{...globalStyles.buttons, backgroundColor: colors.primary}}
            onPress={() => navigation.navigate('Inicio')}>
            <TextComponent text="Ingresar" size={20} font="bold" />
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent styles={{marginBottom: 20}}>
            <View style={{borderWidth: 0.5, flex: 1}} />
            <TextComponent text="  Ó Con  " size={20} font="bold" />
            <View style={{borderWidth: 0.5, flex: 1}} />
          </RowComponent>

          <RowComponent
            styles={{justifyContent: 'space-around', marginBottom: 60}}>
            <TouchableOpacity>
              <IconComponent name="logo-google" size={29} color="green" />
            </TouchableOpacity>

            <TouchableOpacity>
              <IconComponent name="logo-facebook" size={35} color="blue" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
        <RowComponent>
          <TextComponent text="¿Aun no tienes cuenta?" />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 5}}
            onPress={() => navigation.navigate('Register')}>
            <TextComponent text="Regístrate" color={colors.textLinks} />
          </TouchableOpacity>
        </RowComponent>
      </ContainerComponent>
    </View>
  );
};

export default LoginScreen;
