import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

//Interface para los colores de los componentes
export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  textLinks: string;
  buttonTextColor: string;
  placeholderTextColor: string;
}

// Colores para el light theme
export const lightColors: ThemeColors = {
  primary: '#1a71e0',
  text: '#000000',
  background: '#f2f2f2',
  textLinks: '#FFCA28',
  buttonTextColor: '#FFFFFF',
  placeholderTextColor: '#8a8a8a',
};
export const LightTheme: Theme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: '#e2effc',
    card: '#1a71e0',
    text: '#000000',
    border: '#272729',
    notification: 'rgb(255, 69, 58)',
  },
};

// Colores para el dark theme
export const darkColors: ThemeColors = {
  primary: '#1B3A57',
  text: '#FFFFFF',
  background: '#112537',
  textLinks: '#1A73E8',
  buttonTextColor: '#FFFFFF',
  placeholderTextColor: '#8a8a8a',
};
export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '##3b82f7',
    background: '#112537',
    card: '#3b82f7',
    text: '#FFFFFF',
    border: '#272729',
    notification: 'rgb(255, 69, 58)',
  },
};

export const styles = StyleSheet.create({});
