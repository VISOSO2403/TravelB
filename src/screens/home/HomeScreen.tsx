import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {LoadingComponent, MapComponent} from '../../components';
import {useLocationStore} from '../../store/useLocationStore';

const HomeScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) return <LoadingComponent size={40} />;

  return (
    <View style={{flex: 1}}>
      <MapComponent initialLocation={lastKnownLocation} />
    </View>
  );
};

export default HomeScreen;
