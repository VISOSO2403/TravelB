import {Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import ContainerComponent from './ContainerComponent';
import TextComponent from './TextComponent';

const LogoComponent = () => {
  const logo = require('../assets/travel.webp');

  return (
    <ContainerComponent styles={[stylesLogo.container]}>
      <Image source={logo} style={stylesLogo.logo} />
      <TextComponent text="Travel B" size={20} font="bold" />
    </ContainerComponent>
  );
};

export const stylesLogo = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default LogoComponent;
