import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {WalletCardProps} from './interfaces';
import {styles} from './styles';
import {globalStyle} from '../../theme/global.styles';

const WalletCard = (props: WalletCardProps) => {
  const {onPress} = props;

  return (
    <View style={{marginVertical: 10}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.walletCard, globalStyle.shadow]}>
        <Text>WalletCard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletCard;
