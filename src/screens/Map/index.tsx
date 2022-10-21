import React, { memo, useContext, useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Header } from '../../components/Header';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { GeoContext } from '../../../helpers/context';
import { Location } from '../Home/components/constants';

/**
 * Компонент Map - вкладка Map на главном экране
 */
export const Map = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { setMyLocation, myLocation } = useContext(GeoContext);
  const [locations, setLocations] = useState<Location[]>([]);
  const getLocations = async () => {
    try {
      const response = await fetch('http://80.249.149.14:5000/api/location');
      const data = await response.json();
      setLocations(data.locations);
    } catch (error) {
      console.error('Ошибка в функции getLocations', error);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 47.23617,
            longitude: 38.89688,
            latitudeDelta: 0.15,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            pinColor={'purple'}
            description={'Мое местоположение'}
            tappable={true}
            draggable
            coordinate={{
              latitude: myLocation.coords.latitude,
              longitude: myLocation.coords.longitude,
            }}
          />

          {locations.map((attraction) => {
            return (
              <TouchableOpacity key={attraction.id}>
                <Marker
                  description={`${attraction.street}`}
                  title={`${attraction.name}`}
                  coordinate={{
                    longitude: attraction.longitude,
                    latitude: attraction.latitude,
                  }}
                  onPress={() => setIsOpen}
                  key={attraction.id}
                />
              </TouchableOpacity>
            );
          })}
        </MapView>
      </SafeAreaView>
    </>
  );
});
