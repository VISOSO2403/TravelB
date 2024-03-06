import React from 'react';
import {SafeAreaView} from 'react-native';
import {CameraScreen} from './src/screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <CameraScreen />
    </SafeAreaView>
  );
}

export default App;
