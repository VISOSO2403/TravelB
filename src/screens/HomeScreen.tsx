import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {usePermissionStore} from '../hooks/usePermissionStore';
import {RequestPermission, TextComponent} from '../components';

const HomeScreen = () => {
  const {locationsStatus, requestLocationPermission} = usePermissionStore();

  // if (locationsStatus != 'granted') {
  //   <RequestPermission />;
  // }
  return (
    <View style={styles.container}>
      <TextComponent text="Necesitamos los permisos de ubicación para mostrar el mapa" />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
