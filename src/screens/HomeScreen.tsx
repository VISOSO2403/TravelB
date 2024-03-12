import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoadingComponent, MapComponent} from '../components';
import {Location} from '../interfaces/location';
import {useLocationStore} from '../hooks/useLocationStore';

const HomeScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return <LoadingComponent size={40} />;
  }

  return (
    <View style={styles.container}>
      <MapComponent initialLocation={lastKnownLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default HomeScreen;
