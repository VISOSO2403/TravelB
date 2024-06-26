import Geolocation from "@react-native-community/geolocation";
import {Location } from "../interfaces/Location";


export const getCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Error getting location");
        reject(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
}

export const watchCurrentLocation = (
  locationCallback: (location: Location) => void
): number => {
  return Geolocation.watchPosition(info => (
    locationCallback({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
    })
  ),
  (error) => {
    throw new Error("Error watching location");
  }, {
    enableHighAccuracy: true,
    distanceFilter: 10,
  })
}

export const clearWatchLocation = (watchId: number) => {
  Geolocation.clearWatch(watchId);

}
