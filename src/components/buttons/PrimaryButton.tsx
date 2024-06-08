import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyle} from '../../theme/global.styles';
import type {Button} from './Interfaces';
import {stylesButton} from './styles';

const PrimaryButton = (props: Button) => {
  const {children, onPress, styles} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[globalStyle.shadow, stylesButton.primaryButton, styles]}
      onPress={() => {}}>
      {children}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
