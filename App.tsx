import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStackRoute from './src/routes/AuthStackRoute';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AuthStackRoute />
      </NavigationContainer>
    </View>
  );
}

export default App;
