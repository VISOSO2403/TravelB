import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {LoadingComponent, TextComponent} from '../components';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

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
    return <LoadingComponent size={30} />;
  }

  return (
    <View style={{flex: 1}}>
      <View style={{top: 30, alignItems: 'center', zIndex: 99}}>
        <TextComponent text="Escanea" size={30} font="bold" />
      </View>

      <Camera
        style={StyleSheet.absoluteFill}
        device={devices}
        isActive={true}
        codeScanner={codeScanner}
      />
    </View>
  );
};

export default CameraScreen;
