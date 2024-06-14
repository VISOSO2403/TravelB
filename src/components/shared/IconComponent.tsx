import {View, Text} from 'react-native';
import React from 'react';
import {customIconProps} from './interfaces';
import Icon from '@react-native-vector-icons/ionicons';

const IconComponent = (props: customIconProps) => {
  const {name, color, size, styles} = props;

  return (
    <View style={styles}>
      <Icon name={name} size={size ?? 24} color={color ?? 'black'} />
    </View>
  );
};

export default IconComponent;
