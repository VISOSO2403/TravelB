import React from 'react';
import {View} from 'react-native';
import {SignInScreen} from './src/screens';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <SignInScreen />
    </View>
  );
}

export default App;
