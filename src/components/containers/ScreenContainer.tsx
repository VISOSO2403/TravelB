import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import type {Screen} from './interfaces';
import {stylesContainers} from './styles';

const ScreenContainer = (props: Screen) => {
  const {children, isScroll, styles} = props;

  return isScroll ? (
    <ScrollView style={[stylesContainers.screen, styles]}>
      {children}
    </ScrollView>
  ) : (
    <View style={[stylesContainers.screen, styles]}>{children}</View>
  );
};

export default ScreenContainer;
