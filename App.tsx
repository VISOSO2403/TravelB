import React, {PropsWithChildren} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './src/routes/AuthStackNavigation';

const AppNavigation = ({children}: PropsWithChildren) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

function App(): React.JSX.Element {
  return (
    <AppNavigation>
      <AuthStackNavigation />
    </AppNavigation>
  );
}

export default App;
