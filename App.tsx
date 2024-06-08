import React from 'react';
import {View} from 'react-native';
import {SignInScreen} from './src/screens';

import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <SignInScreen />
      </View>
    </PaperProvider>
  );
}

export default App;
