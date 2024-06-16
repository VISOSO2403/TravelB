import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {customIndicatorProps} from './interfaces';
import {stylesShared} from './styles';

const LoadingComponent = (props: customIndicatorProps) => {
  const {size, color} = props;

  return (
    <View style={stylesShared.aIContainer}>
      <ActivityIndicator size={size ?? 40} color={color ?? '#724ee8'} />
    </View>
  );
};

export default LoadingComponent;
