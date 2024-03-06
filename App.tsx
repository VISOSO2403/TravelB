import React, {PropsWithChildren, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './src/routes/AuthStackNavigation';
import {ThemeContext, ThemeProvider} from './src/context/ThemeContext';
import {DarkTheme, LightTheme} from './src/settings/theme/theme';

const AppNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : LightTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
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
