import {Platform, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import type {Location} from '../../interfaces/Location';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {useLocationStore} from '../../store/useLocationStore';
import FabComponent from '../buttons/FabComponent';

interface PropsMap {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

const MapComponent = ({
  showsUserLocation = true,
  initialLocation,
}: PropsMap) => {
  const mapRef = useRef<MapView>(null);
  const cameraLocation = useRef<Location>(initialLocation);
  const [isFollowingUser, setIsFollowingUser] = useState(true);

  const {clearWatchLocation, getLocation, lastKnownLocation, watchLocation} =
    useLocationStore();

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: location,
      zoom: 15,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) moveCameraToLocation(initialLocation);

    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={map => (mapRef.current = map!)}
        showsUserLocation={showsUserLocation}
        showsMyLocationButton={false}
        showsCompass={false}
        onTouchStart={() => setIsFollowingUser(false)}
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>

      {isFollowingUser == false ? (
        <FabComponent
          iconName="locate"
          styles={
            Platform.OS === 'ios' ? styles.iosPosition : styles.androidPosition
          }
          onPress={() => setIsFollowingUser(true)}
        />
      ) : (
        <FabComponent
          iconName="navigate-outline"
          styles={
            Platform.OS === 'ios' ? styles.iosPosition : styles.androidPosition
          }
          onPress={moveToCurrentLocation}
        />
      )}
    </>
  );
};

export default MapComponent;

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  iosPosition: {
    bottom: 120,
    right: 20,
  },
  androidPosition: {
    bottom: 120,
    right: 20,
  },
});
