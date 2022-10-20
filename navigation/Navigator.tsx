import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AppStack} from './AppStack';
import {GeoContext} from '../helpers/context';
import {LocationObject} from 'expo-location';
import * as Location from 'expo-location';

export const Navigator = () => {
  const [myLocation, setMyLocation] = useState<LocationObject>({
    coords: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
    },
    timestamp: 0,
  });

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location: LocationObject = await Location.getCurrentPositionAsync({});
      setMyLocation(location);
    })();
  }, []);

  return (
    <NavigationContainer>
      <GeoContext.Provider value={{myLocation, setMyLocation}}>
        <AppStack />
      </GeoContext.Provider>
    </NavigationContainer>
  );
};
