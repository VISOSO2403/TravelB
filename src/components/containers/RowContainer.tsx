import {View, Text} from 'react-native';
import React from 'react';
import {stylesContainers} from './styles';
import {Row} from './interfaces';

const RowContainer = (props: Row) => {
  const {children, styles, isCenter} = props;

  return isCenter ? (
    <View style={[stylesContainers.rowCenter, styles]}>{children}</View>
  ) : (
    <View style={[stylesContainers.rowSpace, styles]}>{children}</View>
  );
};

export default RowContainer;
