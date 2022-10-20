import {LocationObject} from 'expo-location';
import React from 'react';

export const DEFAULT_CONTEXT_STATE = {
  myLocation: {
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
  },
};

export const GeoContext = React.createContext<{
  myLocation: LocationObject;
  setMyLocation?: React.Dispatch<React.SetStateAction<LocationObject>>;
}>(DEFAULT_CONTEXT_STATE);
