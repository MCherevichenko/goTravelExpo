import React, {memo, useContext, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Header} from '../../components/Header';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {attractions} from '../../mock-data';
import {GeoContext} from '../../../helpers/context';

/**
 * Компонент Map - вкладка Map на главном экране
 */
export const Map = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const {setMyLocation, myLocation} = useContext(GeoContext);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <MapView
          style={{flex: 1}}
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

          {attractions.map((attraction) => {
            return (
              <TouchableOpacity key={attraction.id}>
                <Marker
                  description={`${attraction.street}`}
                  title={`${attraction.name}`}
                  coordinate={attraction.coordinate}
                  onPress={() => setIsOpen}
                  key={attraction.id}
                />
              </TouchableOpacity>
            );
          })}
        </MapView>
      </SafeAreaView>

      {/* <Attraction
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        path={props.path}
        name={props.name}
        founded={props.founded}
        description={props.description}
        id={props.id}
        street={props.street}
      /> */}
    </>
  );
});
