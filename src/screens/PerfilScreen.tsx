import {
  View,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
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

const PerfilScreen = () => {
  const {top} = useSafeAreaInsets();
  const photo = require('../assets/avatar.webp');
  const {colors} = useContext(ThemeContext);

  return (
    <ContainerComponent isScroll>
      <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
        <SectionComponent
          styles={[
            styles.sections,
            globalStyles.shadow,
            {backgroundColor: colors.primary},
          ]}>
          <SectionComponent styles={{alignItems: 'center'}}>
            <Image source={photo} style={styles.image} />
            <TouchableOpacity>
              <TextComponent
                text="Oliver Gabriel Visoso Flores"
                font="bold"
                size={20}
                styles={{marginVertical: 16}}
              />
            </TouchableOpacity>
            <TextComponent text="Manzanillo, Colima" />
          </SectionComponent>
        </SectionComponent>

        <SectionComponent
          styles={[
            styles.sections,
            globalStyles.shadow,
            {backgroundColor: colors.primary},
          ]}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: colors.primary}]}>
            <TextComponent text="Correo" font="bold" />
            <RowComponent>
              <TextComponent text="ovi****@gmail.com" />
              <IconComponent
                name="chevron-forward"
                color={colors.buttonTextColor}
                styles={{marginRight: 16}}
              />
            </RowComponent>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: colors.primary}]}>
            <TextComponent text="Teléfono" font="bold" />
            <RowComponent>
              <TextComponent text="ovi****@gmail.com" />
              <IconComponent
                name="chevron-forward"
                color={colors.buttonTextColor}
                styles={{marginRight: 16}}
              />
            </RowComponent>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: colors.primary}]}>
            <TextComponent text="Correo" font="bold" />
            <RowComponent>
              <TextComponent text="ovi****@gmail.com" />
              <IconComponent
                name="chevron-forward"
                color={colors.buttonTextColor}
                styles={{marginRight: 16}}
              />
            </RowComponent>
          </TouchableOpacity>
        </SectionComponent>

        <RowComponent
          styles={[
            styles.sections,
            {
              height: 50,
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
            },
          ]}
          onPress={() => {}}>
          <TextComponent
            text="Log out"
            font="bold"
            size={16}
            styles={{marginLeft: 16}}
          />
          <IconComponent
            name="log-out-outline"
            color={colors.buttonTextColor}
            styles={{marginRight: 16}}
          />
        </RowComponent>
        <RowComponent
          styles={[
            styles.sections,
            {
              height: 50,
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
            },
          ]}
          onPress={() => {}}>
          <TextComponent
            text="Delate account"
            font="bold"
            size={16}
            color="red"
            styles={{marginLeft: 16}}
          />
          <IconComponent
            name="chevron-forward"
            color="red"
            styles={{marginRight: 16}}
          />
        </RowComponent>
      </View>
    </ContainerComponent>
  );
};

export const styles = StyleSheet.create({
  sections: {
    borderRadius: 16,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  margin: {
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderBottomWidth: 0.2,
  },
});

export default PerfilScreen;
