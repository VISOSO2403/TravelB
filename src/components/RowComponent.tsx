import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../theme/globalStyles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isCenter?: boolean;
}

const RowComponent = (props: Props) => {
  const {children, onPress, isCenter, styles} = props;

  return onPress ? (
    isCenter ? (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[stylesRow.rowCenter, globalStyles.shadow, styles]}>
        {children}
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[stylesRow.rowSpace, globalStyles.shadow, styles]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
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
  rowSpace: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default RowComponent;
