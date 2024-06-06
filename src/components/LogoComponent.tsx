import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import SectionContainer from './containers/SectionContainer';

const LogoComponent = () => {
  const logo = require('../assets/img/travel.webp');

  return (
    <SectionContainer styles={styles.container}>
      <Image source={logo} style={styles.image} />
    </SectionContainer>
  );
};

export default LogoComponent;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
