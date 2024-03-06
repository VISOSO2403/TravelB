import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

interface Props {
  size: number;
  color?: string;
}

const LoadingComponent = ({color, size}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color ?? 'red'} />
    </View>
  );
};

export default LoadingComponent;
