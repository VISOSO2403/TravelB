import {View, Text, Platform} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ContainerComponent,
  IconComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {ThemeContext} from '../context/ThemeContext';
import {globalStyles} from '../theme/globalStyles';

const WalletScreen = () => {
  const {top} = useSafeAreaInsets();

  const {colors} = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <ContainerComponent>
        <View
          style={{
            marginTop: Platform.OS === 'ios' ? top + 20 : top + 10,
            alignItems: 'center',
          }}>
          <TextComponent text="Métodos de pago" size={30} font="bold" />
        </View>

        <View style={{flex: 1, top: 90}}>
          <SectionComponent>
            <RowComponent
              styles={{
                ...globalStyles.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent name="card" />
              <TextComponent
                text=" Agregar tarjeta"
                size={20}
                // color={colors.text}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>

          <SectionComponent>
            <RowComponent
              styles={{
                ...globalStyles.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent name="logo-paypal" />
              <TextComponent
                text=" Pagar con paypal"
                size={20}
                // color={textButton}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>

          <SectionComponent>
            <RowComponent
              styles={{
                ...globalStyles.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent name="logo-google-playstore" />
              <TextComponent text=" Google play credit" size={20} font="bold" />
            </RowComponent>
          </SectionComponent>
        </View>
      </ContainerComponent>
    </View>
  );
};

export default WalletScreen;
