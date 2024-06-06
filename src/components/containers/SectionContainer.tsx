import {View} from 'react-native';
import React from 'react';
import {Section} from './interfaces';
import {stylesContainers} from './styles';

const SectionContainer = (props: Section) => {
  const {children, styles} = props;

  return <View style={[stylesContainers.section, styles]}>{children}</View>;
};

export default SectionContainer;
