import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import type {FabProps} from './Interfaces';
import {stylesButton} from './styles';
import IconComponent from '../shared/IconComponent';

const FabComponent = (props: FabProps) => {
  const {iconName, iconSize, onPress, backgroundColor, styles} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        stylesButton.fabButton,
        stylesButton.shadow,
        styles,
        {backgroundColor: backgroundColor ?? 'white'},
      ]}>
      <IconComponent name={iconName} size={iconSize ?? 24} />
    </TouchableOpacity>
  );
};

export default FabComponent;
