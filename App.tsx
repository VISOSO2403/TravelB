import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStackRoute from './src/routes/AuthStackRoute';
import HomeBottomTabs from './src/routes/HomeBottomTabs';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {/* <AuthStackRoute /> */}
        <HomeBottomTabs />
      </NavigationContainer>
    </View>
  );
}

export default App;
