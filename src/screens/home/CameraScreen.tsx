import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';

import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {IconComponent, TextComponent} from '../../components';
import {globalStyle} from '../../theme/global.styles';

const CameraScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevice('back');

  useEffect(() => {
    checkPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      console.log(`Scanned ${codes[0].value} codes!`);
    },
  });

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    if (newCameraPermission == null) {
      await requestPermission();
    }
  };
  if (devices == null) {
    return (
      <SafeAreaView style={styles.noDeviceContainer}>
        <View style={[styles.noDevice, globalStyle.shadow]}>
          <IconComponent name="alert-circle-outline" size={50} />
          <TextComponent text="Cámara no encontrada" font="bold" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{top: 30, alignItems: 'center', zIndex: 99}}>
        <TextComponent text="Escanea" size={30} font="bold" />
      </View>

      <Camera
        style={StyleSheet.absoluteFill}
        device={devices}
        isActive={true}
        codeScanner={codeScanner}
      />
    </SafeAreaView>
  );
};

export default CameraScreen;

export const styles = StyleSheet.create({
  noDeviceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDevice: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    bottom: 20,
    justifyContent: 'center',
    height: 200,
    width: 200,
  },
});
