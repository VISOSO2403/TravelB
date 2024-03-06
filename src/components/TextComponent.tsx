import {View, Text, StyleProp, TextStyle} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  text: string | any;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
  font?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const TextComponent = (props: Props) => {
  const {text, color, flex, font, size, styles} = props;

  const {colors} = useContext(ThemeContext);

  return (
    <Text
      style={[
        {
          color: color ?? colors.text,
          fontSize: size ?? 15,
          flex: flex ?? 0,
          fontWeight: font,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
