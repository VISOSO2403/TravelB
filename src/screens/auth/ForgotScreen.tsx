import {View, Text, Platform} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext';
import {globalStyles} from '../../theme/globalStyles';

import {
  ContainerComponent,
  FabComponent,
  InputComponent,
  LogoComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';

const ForgotScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        onPress={navigation.goBack}
        styles={globalStyles.fabPosition}
      />
      <ContainerComponent isScroll>
        <SectionComponent
          styles={{marginTop: Platform.OS === 'ios' ? top - 10 : top}}>
          <LogoComponent />
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text="¿Olvidaste tu contraseña?"
            font="700"
            size={28}
          />
          <TextComponent
            text="Recuperar contraseña"
            styles={{marginBottom: 20}}
          />

          <InputComponent
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{...globalStyles.buttons, backgroundColor: colors.primary}}>
            <TextComponent text="Recuperar" size={20} font="bold" />
          </RowComponent>
        </SectionComponent>

        <SectionComponent
          styles={{
            marginTop: 50,
            alignItems: 'center',
          }}>
          <TextComponent text="Si no recibes un correo, revisa tu carpeta de spam" />
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default ForgotScreen;
