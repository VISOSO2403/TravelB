import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {useContext} from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  name: any;
  size?: number;
  color?: string;
  styles?: StyleProp<ViewStyle>;
}

const IconComponent = (props: Props) => {
  const {name, size, color, styles} = props;

  const {colors} = useContext(ThemeContext);

  return (
    <View style={styles}>
      <IonIcon name={name} size={size ?? 24} color={color ?? colors.primary} />
    </View>
  );
};

export default IconComponent;
