import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  IconComponent,
  PrimaryButton,
  ScreenContainer,
  SectionContainer,
  TextComponent,
} from '../../components';
import RowContainer from '../../components/containers/RowContainer';

// #region info
const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{marginTop: 10}}>
          <SectionContainer styles={styles.cardAvatar}>
            <Image
              source={require('../../assets/img/avatar.webp')}
              style={styles.avatar}
            />
            <TouchableOpacity>
              <TextComponent
                text="Oliver Gabriel Visoso Flores"
                font="bold"
                size={20}
                styles={{marginVertical: 13}}
              />
            </TouchableOpacity>
            <TextComponent text="Manzanillo, Colima" />
          </SectionContainer>

          {/* Inicia información personal */}
          <TextComponent
            text="Información personal"
            font="bold"
            size={16}
            styles={{marginVertical: 10}}
          />
          <SectionContainer styles={styles.cardInfo}>
            <TouchableOpacity style={[styles.buttons]}>
              <TextComponent text="Correo" font="bold" />
              <RowContainer>
                <TextComponent text="oliver****@gmail.com" />
                <IconComponent
                  name="chevron-forward"
                  styles={{marginRight: 16}}
                />
              </RowContainer>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={[styles.buttons]}>
              <TextComponent text="Teléfono" font="bold" />
              <RowContainer isCenter styles={{}}>
                <TextComponent text="314243561" />
                <IconComponent
                  name="chevron-forward"
                  styles={{marginRight: 16}}
                />
              </RowContainer>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={[styles.buttons]}>
              <TextComponent text="Contraseña" font="bold" />
              <RowContainer>
                <TextComponent text="*******" />
                <IconComponent
                  name="chevron-forward"
                  styles={{marginRight: 16}}
                />
              </RowContainer>
            </TouchableOpacity>
          </SectionContainer>
          <TextComponent
            text="Ajustes"
            font="bold"
            size={16}
            styles={{marginVertical: 10}}
          />
          <SectionContainer styles={styles.cardSettings}>
            <RowContainer
              styles={{
                paddingTop: 10,
                marginRight: 10,
                alignItems: 'center',
              }}>
              <TextComponent text="Tema Light/Dark" font="bold" />
              <Switch />
            </RowContainer>
            <View style={styles.line} />

            <TouchableOpacity style={styles.buttons}>
              <TextComponent text="Notificaciones" font="bold" />
              <IconComponent
                name="chevron-forward"
                styles={{marginRight: 16}}
              />
            </TouchableOpacity>
          </SectionContainer>

          {/* Inicia sección de soporte */}
          <TextComponent
            text="Soporte"
            font="bold"
            size={16}
            styles={{marginVertical: 10}}
          />
          <SectionContainer styles={styles.cardSettings}>
            <TouchableOpacity style={styles.buttons}>
              <TextComponent text="Política de privacidad" font="bold" />
              <IconComponent
                name="chevron-forward"
                styles={{marginRight: 16}}
              />
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={styles.buttons}>
              <TextComponent text="Términos y condiciones" font="bold" />
              <IconComponent
                name="chevron-forward"
                styles={{marginRight: 16}}
              />
            </TouchableOpacity>
          </SectionContainer>

          <RowContainer styles={{marginVertical: 40, paddingHorizontal: 16}}>
            <TouchableOpacity>
              <TextComponent text="Cerrar sesión" font="bold" color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <TextComponent text="Eliminar cuenta" font="bold" color="red" />
            </TouchableOpacity>
          </RowContainer>
        </SafeAreaView>
        <View style={{height: 120}} />
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProfileScreen;

export const styles = StyleSheet.create({
  cardAvatar: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardInfo: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 5,
  },
  cardSettings: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    // paddingRight: 5,
    marginVertical: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  line: {
    height: 0.5,
    backgroundColor: 'black',
    marginTop: 10,
    marginRight: 20,
  },
});
