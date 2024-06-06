import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';

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

  return (
    <Text
      style={[
        {
          flex: flex ?? 0,
          color: color ?? 'black',
          fontSize: size ?? 15,
          fontWeight: font,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
