import Geolocation from "@react-native-community/geolocation";
import { Location } from '../interfaces/location';
import { useState } from "react";


export const getCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log(`Can't get location`);
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};

export const watchCurrentLocation = (
  locationCallback: (location: Location) => void,
): number => {
  return Geolocation.watchPosition( info => (

    locationCallback({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
    })


  ), (error) => {
    throw new Error(`Can't get watchPosition`);
  }, {
    enableHighAccuracy: true,
    distanceFilter: 10
  });
};


export const clearWatchLocation = (watchId: number) => {
  Geolocation.clearWatch(watchId);
}

