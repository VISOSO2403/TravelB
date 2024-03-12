import React, {PropsWithChildren, useContext} from 'react';
import {enableLatestRenderer} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext, ThemeProvider} from './src/context/ThemeContext';
import AuthStackNavigation from './src/routes/AuthStackNavigation';
import {PermissionsProvider} from './src/context/PermissionContext';
import {DarkTheme, LightTheme} from './src/settings/theme/theme';

enableLatestRenderer();

const AppNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : LightTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppPermissions = ({children}: PropsWithChildren) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppPermissions>
        <AppNavigation>{children}</AppNavigation>
      </AppPermissions>
    </ThemeProvider>
  );
};

function App(): React.JSX.Element {
  return (
    <AppTheme>
      <AuthStackNavigation />
    </AppTheme>
  );
}

export default App;
