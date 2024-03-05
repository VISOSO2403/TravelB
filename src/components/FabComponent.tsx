import {StyleProp, ViewStyle, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {IconComponent} from '.';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  iconName: string;
  iconSize?: number;
  onPress: () => void;
  backgroundColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const FabComponent = (props: Props) => {
  const {iconName, iconSize, onPress, backgroundColor, styles} = props;
  const {colors} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          ...stylesFab.fabButton,
          backgroundColor: backgroundColor ?? colors.primary,
        },
        styles,
      ]}>
      <IconComponent
        name={iconName}
        size={iconSize}
        color={colors.buttonTextColor}
      />
    </TouchableOpacity>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    backgroundColor: 'white',
    width: 40,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
    position: 'absolute',

    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default FabComponent;
