import {TouchableOpacity} from 'react-native';
import React from 'react';
import type {Button} from './Interfaces';
import {stylesButton} from './styles';

const PrimaryButton = (props: Button) => {
  const {children, onPress, styles} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[stylesButton.primaryButton, stylesButton.shadow, styles]}>
      {children}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
