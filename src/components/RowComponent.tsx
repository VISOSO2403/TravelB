import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {children, onPress, styles} = props;

  return onPress ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[stylesRow.rowCenter, stylesRow.shadow, styles]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[stylesRow.rowCenter, styles]}>{children}</View>
  );
};

export const stylesRow = StyleSheet.create({
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.63,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default RowComponent;
